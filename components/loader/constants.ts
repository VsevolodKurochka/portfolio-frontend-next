export enum LOADER_COLORS {
	WHITE = 'white',
	BRAND = 'brand'
}

export enum LOADER_SIZES {
	DEFAULT = 'default',
	SMALL = 'small',
	ABOVE = 'above'
}

export const LOADER_COLORS_CLASSES = {
	[LOADER_COLORS.BRAND]: 'loader_brand',
	[LOADER_COLORS.WHITE]: 'loader_white'
};

export const LOADER_SIZES_CLASSES = {
	[LOADER_SIZES.DEFAULT]: 'loader_default',
	[LOADER_SIZES.SMALL]: 'loader_small',
	[LOADER_SIZES.ABOVE]: 'loader_above'
};