// Max 110 str, 100 dex, min 1.4 APS
const weaponData = [
	{
		sound: "axe",
		baseTypes: [
			"Rusted Hatchet",
			"Jade Hatchet",
			"Boarding Axe",
			"Arming Axe",
			"Tomahawk",
			"Chest Splitter",
		],
	},
	{
		sound: "mace",
		baseTypes: [
			"Driftwood Club",
			"Tribal Club",
			"Spiked Club",
			"War Hammer",
			"Bladed Mace",
			"Dream Mace", // Other maces have too high strength requirement
		],
	},
	{
		sound: "sceptre",
		baseTypes: [
			"Grinning Fetish",
			"Blood Sceptre",
			"Karui Sceptre",
			"Vaal Sceptre",
		],
	},
	{
		sound: "sword",
		baseTypes: [
			"Rusted Sword",
			"Copper Sword",
			"Sabre",
			"Broad Sword",
			"War Sword",
			"Ancient Sword",
			"Elegant Sword",
			"Cutlass",
			"Graceful Sword",
			"Rusted Spike",
			"Whalebone Rapier",
			"Battered Foil",
			"Basket Rapier",
			"Jagged Foil",
		],
	},
];

export function getLeapSlamFilter({ maxAreaLevel, minItemLevel }) {
	return weaponData
		.map(({ sound, baseTypes }) => {
			return `
Show
		AreaLevel <= ${maxAreaLevel || 83}
		ItemLevel >= ${minItemLevel || 1}
		SocketGroup = RGB
		BaseType == "${baseTypes.join('" "')}"
		SetFontSize 45
		SetBorderColor 0 185 185 200
		SetBackgroundColor 255 255 255 125
		# SetTextColor 0 140 140 200
		MinimapIcon 0 Cyan Cross
		CustomAlertSound "sounds/brian-${sound}-rgb.mp3"

Show
		AreaLevel <= ${maxAreaLevel || 83}
		ItemLevel >= ${minItemLevel || 1}
		SocketGroup = RG
		BaseType == "${baseTypes.join('" "')}"
		SetFontSize 45
		SetBorderColor 0 185 185 200
		SetBackgroundColor 255 255 255 125
		# SetTextColor 0 140 140 200
		MinimapIcon 0 Cyan Cross
		CustomAlertSound "sounds/brian-${sound}-g.mp3"

Show
		AreaLevel <= ${maxAreaLevel || 83}
		ItemLevel >= ${minItemLevel || 1}
		SocketGroup = 3BB
		BaseType == "${baseTypes.join('" "')}"
		SetFontSize 45
		SetBorderColor 0 185 185 200
		SetBackgroundColor 255 255 255 125
		# SetTextColor 0 140 140 200
		MinimapIcon 0 Cyan Cross
		CustomAlertSound "sounds/brian-${sound}-3b.mp3"
		`;
		})
		.join("\n\n\n");
}
