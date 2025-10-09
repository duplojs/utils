import { type UnionToIntersection } from "./unionToIntersection";

export type LastUnionElement<T> =
	UnionToIntersection<
		T extends any
			? () => T
			: never
	> extends () => (infer R)
		? R
		: never;
