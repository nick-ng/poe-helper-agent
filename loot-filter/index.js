import { readdirSync } from "fs";
import { resolve } from "path";

import { oniGoroshiFarm, baseFilter } from "./filters.js";
import { getCustomItemsFilter } from "./filter-loader.js";
import { getChaosFilter } from "./chaos-filter.js";
import { writeFilters } from "./write-filters.js";

export const makeChaosFilter = (
	itemCounts,
	outputDir,
	isDebug = false,
	chaosOnly = false
) => {
	const chaosFilter = getChaosFilter(itemCounts, chaosOnly);
	writeFilters(
		[chaosFilter],
		outputDir,
		{ prefix: "99_chaos", suffix: "" },
		isDebug,
		[5, 10]
	);
};

export const autoMakeFilters = (outputDir, isDebug = false) => {
	writeFilters(
		[getCustomItemsFilter(), baseFilter()],
		outputDir,
		{ prefix: "1_t16-maps_", suffix: "" },
		isDebug,
		[19, 25]
	);
	writeFilters(
		[getCustomItemsFilter(), baseFilter()],
		outputDir,
		{ prefix: "2_t16-maps_", suffix: "" },
		isDebug,
		[26, 999]
	);

	writeFilters(
		[oniGoroshiFarm],
		outputDir,
		{ prefix: "yy_oni_farm_", suffix: "" },
		isDebug,
		[0, 2]
	);

	const moduleNames = readdirSync(resolve(".", "loot-filter", "filters"));

	moduleNames.forEach(async (moduleName) => {
		const { default: getFilter, preProcessBase } = await import(
			`./filters/${moduleName}`
		);

		const filterName = moduleName.replace(".js", "");

		const filterText = getFilter();
		if (!filterText) {
			console.info(`Skipping ${filterName}`);
			return;
		}

		if (filterName.includes("maps")) {
			console.info(`Writing ${filterName}`);
			writeFilters(
				[getCustomItemsFilter(), filterText],
				outputDir,
				{ prefix: `2_${filterName}_`, suffix: "", preProcessBase },
				isDebug,
				[19, 25]
			);
			writeFilters(
				[getCustomItemsFilter(), filterText],
				outputDir,
				{
					prefix: `3_${filterName}_`,
					suffix: "",
					preProcessBase,
				},
				isDebug,
				[26, 999]
			);
		} else if (filterName.includes("phase")) {
			console.info(`Writing ${filterName}`);
			// league start
			let filterRange = [0, 999];

			if (filterName.includes("phase-1")) {
				filterRange = [5, 11];
			} else if (filterName.includes("phase-2")) {
				filterRange = [19, 25];
			} else if (filterName.includes("phase-3")) {
				filterRange = [26, 999];
			}

			writeFilters(
				[getCustomItemsFilter(), filterText],
				outputDir,
				{
					prefix: `0_${filterName.replace("phase", "p")}_`,
					suffix: "",
					preProcessBase,
				},
				isDebug,
				filterRange
			);
		} else if (filterName.includes("act-5")) {
			// act 5 any %
			writeFilters(
				[filterText],
				outputDir,
				{ prefix: `9_${filterName}_`, suffix: "" },
				isDebug,
				[5, 11]
			);
		} else {
			console.info(`Skipping ${filterName}`);
			return;
			writeFilters(
				[getCustomItemsFilter(), filterText],
				outputDir,
				{ prefix: `0_${filterName}_`, suffix: "" },
				isDebug,
				[5, 11]
			);
		}
	});
};
