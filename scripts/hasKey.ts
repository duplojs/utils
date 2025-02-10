import type { ObjectKey } from "./types";

export function hasKey<
	O extends object,
>(obj: O, key: ObjectKey): key is keyof O {
	return key in obj;
}
