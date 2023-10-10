import { makeBaseTypeFilter } from "./generators.js";

const t1CurrencyDivCards = [
	{
		after: new Date("2023-01-01T00:00:00.000+12:00"),
		cards: [
			"Abandoned Wealth",
			"Alluring Bounty",
			"Brother's Stash",
			"The Hoarder",
			"The Long Con",
			"The Saint's Treasure",
			"The Scout",
			"House of Mirrors",
			"Seven Years Bad Luck",
			"The Immortal",
			"Unrequited Love",
			"Darker Half",
			"Altered Perception",
			"Rebirth and Renewal",
			"The Sephirot",
			"Brother's Gift",
		],
	},
	{
		after: new Date("2023-08-19T00:00:00.000+12:00"), // 3.22
		cards: ["The Fortunate"],
	},
];

const getT1CurrencyDivCardsFilter = () => {
	const temp = t1CurrencyDivCards
		.filter((a) => a.after < new Date())
		.map((a) => a.cards)
		.flat();

	return makeBaseTypeFilter(temp, [
		'Class "Divination"',
		"SetFontSize 45",
		"##T0CurrencyText",
		"SetBorderColor 255 0 0 255",
		"SetBackgroundColor 255 255 255 200",
		"MinimapIcon 0 Red Star",
		"PlayEffect Red",
		"PlayAlertSound 6 300",
	]);
};

const t2CurrencyDivCards = [
	{
		after: new Date("2023-01-01T00:00:00.000+12:00"),
		cards: [
			"A Sea of Blue",
			"Acclimatisation",
			"Chaotic Disposition",
			"Coveted Possession",
			"Demigod's Wager",
			"Emperor's Luck",
			"Harmony of Souls",
			"Loyalty",
			"Lucky Connections",
			"Lucky Deck",
			"No Traces",
			"Parasitic Passengers",
			"Rain of Chaos",
			"Society's Remorse",
			"The Cacophony",
			"The Cartographer",
			"The Catalyst",
			"The Fool",
			"The Gemcutter",
			"The Heroic Shot",
			"The Innocent",
			"The Inventor",
			"The Journey",
			"The Master Artisan",
			"The Puzzle",
			"The Rabbit's Foot",
			"The Scholar",
			"The Seeker",
			"The Survivalist",
			"The Tinkerer's Table",
			"The Tireless Extractor",
			"The Union",
			"The Wrath",
			"Three Faces in the Dark",
			"Three Voices",
			"Underground Forest",
			"Vinia's Token",
			"Bowyer's Dream",
			"Draped in Dreams",
			"Emperor of Purity",
			"Humility",
			"Immortal Resolve",
			"Imperial Legacy",
			"Rebirth",
			"The Celestial Justicar",
			"The Chains that Bind",
			"The Dapper Prodigy",
			"The Dark Mage",
			"The Ethereal",
			"The Porcupine",
			"The Sacrifice",
			"The Warlord",
			"The White Knight",
			"Vanity",
		],
	},
];

const getT2CurrencyDivCardsFilter = () => {
	const temp = t2CurrencyDivCards
		.filter((a) => a.after < new Date())
		.map((a) => a.cards)
		.flat();
	return makeBaseTypeFilter(temp, [
		'Class "Divination"',
		"SetFontSize 45",
		"##T2CurrencyText",
		"SetBorderColor 47 252 47 255",
		"##DefaultBackground",
		"MinimapIcon 2 Green Triangle",
		"PlayEffect White",
		'CustomAlertSound "sounds/oof-joey.mp3"',
	]);
};

const sixLinkDivCards = [
	{
		after: new Date("2023-01-01T00:00:00.000+12:00"),
		cards: [
			"Draped in Dreams",
			"Emperor of Purity",
			"Immortal Resolve",
			"The Celestial Justicar",
			"The Chains that Bind",
			"The Dapper Prodigy",
			"The Ethereal",
			"The Jeweller's Boon",
			"The Sacrifice",
			"The White Knight",
		],
	},
];

const getSixLinkDivCardsFilter = () => {
	const temp = sixLinkDivCards
		.filter((a) => a.after < new Date())
		.map((a) => a.cards)
		.flat();
	return makeBaseTypeFilter(temp, [
		'Class "Divination"',
		"SetFontSize 45",
		"##GoodBaseBorder",
		"##DefaultBackground",
		"MinimapIcon 0 Yellow Triangle",
		"PlayEffect Yellow",
		'CustomAlertSound "sounds/brian-06-shing.mp3"',
	]);
};

export const getDivCardFilter = () =>
	[
		getT1CurrencyDivCardsFilter(),
		getT2CurrencyDivCardsFilter(),
		getSixLinkDivCardsFilter(),
	].join("\n\n\n");
