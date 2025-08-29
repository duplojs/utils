import { arrayFilter } from "./filter";
import { arrayFind } from "./find";
import { arrayFlat } from "./flat";
import { arrayGroup } from "./group";
import { arrayIncludes } from "./includes";
import { arrayMap } from "./map";
import { arrayMaxItems } from "./maxItems";
import { arrayMinItems } from "./minItems";
import { arrayPush } from "./push";
import { arrayReduce } from "./reduce";
import { arraySome } from "./some";

export * from "./filter";
export * from "./find";
export * from "./group";
export * from "./includes";
export * from "./map";
export * from "./maxItems";
export * from "./minItems";
export * from "./reduce";
export * from "./push";
export * from "./flat";
export * from "./some";

export namespace DArray {
	export const filter = arrayFilter;

	export const find = arrayFind;

	export const group = arrayGroup;

	export const includes = arrayIncludes;

	export const map = arrayMap;

	export const maxItems = arrayMaxItems;

	export const minItems = arrayMinItems;

	export const reduce = arrayReduce;

	export const push = arrayPush;

	export const flat = arrayFlat;

	export const some = arraySome;
}

// eslint-disable-next-line id-length
export const A = DArray;
