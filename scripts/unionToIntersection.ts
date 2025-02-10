export type UnionToIntersection<T> =
	(
		T extends any
			? (_x: T) => any
			: never
	) extends (_x: infer R) => any
		? R
		: never;
