// Define essential color mappings
export const COLORS = [
	{ symbol: '§b', name: 'Aqua' },
	{ symbol: '§5', name: 'Dark Purple' },
	{ symbol: '§2', name: 'Dark Green' },
	{ symbol: '§4', name: 'Dark Red' },
	{ symbol: '§6', name: 'Gold' },
	{ symbol: '§8', name: 'Dark Gray' },
	{ symbol: '§e', name: 'Yellow' },
	{ symbol: '§f', name: 'White' },
	{ symbol: '§c', name: 'Red' },
	{ symbol: '§g', name: 'Minecoin Gold' },
	{ symbol: '§a', name: 'Green' },
	{ symbol: '§d', name: 'Light Purple' },
	{ symbol: '§7', name: 'Gray' },
	{ symbol: '§1', name: 'Dark Blue' },
	{ symbol: '§3', name: 'Dark Aqua' },
	{ symbol: '§9', name: 'Blue' },
	{ symbol: '§0', name: 'Black' },
	{ symbol: '§0', name: 'Blue Dark Grey' },
	{ symbol: '§6', name: 'Medium Purple' },
	{ symbol: '§4', name: 'Dark Orange' },
	{ symbol: '§2', name: 'Medium Green' },
	{ symbol: '§b', name: 'Medium Cyan' },
	{ symbol: '§8', name: 'Beige' },
	{ symbol: '§3', name: 'Dark Brown' },
	{ symbol: '§a', name: 'Medium Red' },
	{ symbol: '§5', name: 'Brown' },
];

// Symbol list for gradient mapping and color logic
export const COLORSYMBOLLIST = COLORS.map(color => color.symbol);

// Color Gradients for visual representation
export const GRADIENTS = {
	blue: ['§1', '§9', '§3', '§b', '§3', '§9', '§1'],
	yellow: ['§6', '§g', '§e', '§g', '§6'],
	black: ['§0', '§8', '§7', '§f', '§7', '§8', '§0'],
	gray: ['§8', '§7', '§f', '§7', '§8'],
	purple: ['§5', '§u', '§d', '§u', '§5'],
};

// Quick access color symbols
export const COLOR1 = '§9'; // Blue
export const COLOR2 = '§b'; // Aqua
