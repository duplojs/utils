import { arrayFilter } from "./filter";
import { arrayFind } from "./find";
import { arrayGroup } from "./group";
import { arrayMap } from "./map";
import { arrayMaxItems } from "./maxItems";
import { arrayMinItems } from "./minItems";
import { arrayReduce } from "./reduce";

export * from "./filter";
export * from "./find";
export * from "./group";
export * from "./map";
export * from "./maxItems";
export * from "./minItems";
export * from "./reduce";

export namespace DArray {
	export const filter = arrayFilter;

	export const find = arrayFind;

	export const group = arrayGroup;

	export const map = arrayMap;

	export const maxItems = arrayMaxItems;

	export const minItems = arrayMinItems;

	export const reduce = arrayReduce;
}

// eslint-disable-next-line id-length
export const A = DArray;
