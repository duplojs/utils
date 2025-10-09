import { type LastUnionElement } from "./lastUnionElement";

type PushElementToTuple<T extends any[], V> = [...T, V];

export type UnionToTuple<
	T,
	L = LastUnionElement<T>,
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
