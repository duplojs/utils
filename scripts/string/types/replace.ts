export type Replace<
	GenericValue extends string,
	GenericReplacedValue extends string,
	GenericReplacer extends string,
> = GenericValue extends `${infer InferredFirst}${GenericReplacedValue}${infer InferredLast}`
	? Replace<
		`${InferredFirst}${GenericReplacer}${InferredLast}`,
		GenericReplacedValue,
		GenericReplacer
	> extends infer InferredResult
		? InferredResult
		: never
	: GenericValue;
