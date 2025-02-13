import { TCardType, TGenericCard } from '~/src/types/serializables/cards';

export enum TCropColor {
	UNKNOWN,
	RED,
	GREEN,
	YELLOW,
}

export enum TGardenBedType {
	UNKNOWN,
	COMMON,
	RAISED,
	GREENHOUSE,
	TRELLIS,
	VERTICAL,
	ROTATIONAL,
}

export const CropCardId = {
	WHEAT: 1,
	CHERRY: 2,
	CABBAGE: 3,
	CORN: 4,
	CARROTS: 5,
	ONION: 6,
	MANGO: 7,
	TOMATO: 8,
	POTATO: 9,
	MELON: 10,
	BEANS: 11,
	WASABI: 12,
	PINEAPPLE: 13,
	EGGPLANT: 14,
	PEPPER: 15,
	TANGERINE: 16,
	PUMPKIN: 17,
	GRAPE: 18,
	CLOUDBERRY: 19,
	STRAWBERRY: 20,
	BLUEBERRY: 21,
};

export type TCropId = keyof typeof CropCardId;

export type TWithCropColor = {
	group: TCropColor;
};

export type TCrop = TWithCropColor & {
	ripeTimer: number;
	value: number;
	id: TCropId;
	fertilized: number;
};

export type TBed = {
	type: TGardenBedType;
	crop: TCrop | null;
};
export type TCropCard = TGenericCard<TCardType.CROP> & TCrop;
