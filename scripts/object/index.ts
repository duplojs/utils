import { objectEntries } from "./entries";
import { objectFromEntries } from "./fromEntries";
import { objectHasKeys } from "./hasKeys";
import { isKeyofObject } from "./isKeyof";
import { objectKeys } from "./keys";
import { objectValues } from "./values";

export * from "./types";

export * from "./entries";
export * from "./fromEntries";
export * from "./hasKeys";
export * from "./isKeyof";
export * from "./keys";
export * from "./values";

export namespace DObject {
	export const entries = objectEntries;

	export const fromEntries = objectFromEntries;

	export const hasKeys = objectHasKeys;

	export const isKeyof = isKeyofObject;

	export const keys = objectKeys;

	export const values = objectValues;
}

// eslint-disable-next-line id-length
export const O = DObject;
