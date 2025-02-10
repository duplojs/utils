import type { AnyFunction, ObjectEntry, ObjectKey } from "./types";
import type { UnionToIntersection } from "./unionToIntersection";

export type EntriesToMapper<E extends ObjectEntry> =
	UnionToIntersection<
		E extends [infer K, infer V]
			? {
				[_P in K extends ObjectKey ? K : never]: (_value: V, _key: K) => any
			}
			: never
	>;

export function entryUseMapper<
	E extends ObjectEntry,
	M extends EntriesToMapper<E>,
	R = ReturnType<
		M[keyof M] extends AnyFunction ?
			M[keyof M]
			: never
	>,
>(
	[key, value]: E,
	mapper: M,
): R {
	const ReTypedMapper: Record<ObjectKey, AnyFunction> = mapper as any;
	return ReTypedMapper[key](value);
}
