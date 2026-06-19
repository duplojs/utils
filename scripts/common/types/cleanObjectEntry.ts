export type CleanObjectEntry<
	GenericEntry extends readonly [string, unknown],
> = Extract<
	GenericEntry extends any
		? GenericEntry extends readonly [infer Inferred, infer InferredValue]
			? Inferred extends any
				? InferredValue extends any
					? [Inferred, InferredValue]
					: never
				: never
			: never
		: never,
	GenericEntry
>;

