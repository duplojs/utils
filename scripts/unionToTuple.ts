import type { GetLastOfUnion } from "./getLastOfUnion";

export type PushElementToTuple<T extends any[], V> = [...T, V];

export type UnionToTuple<
	T,
	L = GetLastOfUnion<T>,
	N = [T] extends [never]
		? true
		: false,
> =
	true extends N ?
		[]
		: PushElementToTuple<
			UnionToTuple<
				Exclude<T, L>
			>,
			L
		>;
