import { type IsEqual, type Adaptor, type LastUnionElement, type UnionToIntersection, type SimplifyTopLevel, type IsExtends } from "@scripts/common";

type GroupPath<
	GenericPath extends string,
> = IsEqual<GenericPath, never> extends true
	? never
	: LastUnionElement<GenericPath> extends infer InferredLast
		? InferredLast extends `${infer InferredFirst}.${string}`
			? InferredFirst extends `[${number}]`
				? Extract<GenericPath, `[${number}].${string}`> extends infer InferredResult
					? ["[tuple]", InferredResult] | GroupPath<Exclude<GenericPath, InferredResult>>
					: never
				: Extract<GenericPath, `${InferredFirst}.${string}`> extends infer InferredResult
					? [InferredFirst, InferredResult] | GroupPath<Exclude<GenericPath, InferredResult>>
					: never
			: InferredLast extends `[${number}]`
				? ["[tuple]", Extract<GenericPath, `[${number}]`>] | GroupPath<Exclude<GenericPath, `[${number}]`>>
				: [InferredLast, InferredLast] | GroupPath<Exclude<GenericPath, InferredLast>>
		: never;

type RemoveFirstFromKey<
	GenericObject extends object,
	GenericFirst extends string,
> = {
	[
	Prop in keyof GenericObject as
	Prop extends `${GenericFirst}.${infer InferredRst}` ? InferredRst : never
	]: GenericObject[Prop]
};

type UnFlatTuple<
	GenericObject extends object,
	GenericGroupPath extends [string, string],
	GenericLastTuple extends unknown[] = [],
> = Extract<GenericGroupPath[1], `[${GenericLastTuple["length"]}]${string}`> extends infer InferredElementPath
	? IsEqual<InferredElementPath, never> extends true
		? GenericLastTuple
		: (
			IsEqual<InferredElementPath, `[${GenericLastTuple["length"]}]`> extends true
				? [
					...GenericLastTuple,
					GenericObject[Adaptor<InferredElementPath, keyof GenericObject>],
				]
				: [
					...GenericLastTuple,
					UnFlatObject<
						RemoveFirstFromKey<
							Pick<
								GenericObject,
								Adaptor<InferredElementPath, keyof GenericObject>
							>,
							`[${GenericLastTuple["length"]}]`
						>
					>,
				]
		) extends infer InferredResult extends any[]
			? UnFlatTuple<
				GenericObject,
				GenericGroupPath,
				InferredResult
			>
			: never
	: never;

export type UnFlatObject<
	GenericObject extends object,
> = GroupPath<Adaptor<keyof GenericObject, string>> extends infer InferredGroupedPath
	? (
		InferredGroupedPath extends [
			infer InferredFirst extends string,
			infer InferredPath extends string,
		]
			? IsExtends<InferredFirst, "[tuple]"> extends true
				? UnFlatTuple<GenericObject, InferredGroupedPath>
				: IsEqual<InferredFirst, "[number]"> extends true
					? IsEqual<InferredFirst, InferredPath> extends true
						? GenericObject[Adaptor<InferredFirst, keyof GenericObject>][]
						: UnFlatObject<
							RemoveFirstFromKey<
								Pick<
									GenericObject,
									Adaptor<InferredPath, keyof GenericObject>
								>,
								InferredFirst
							>
						>[]
					: IsEqual<InferredFirst, InferredPath> extends true
						? {
							[Prop in InferredFirst]: GenericObject[Adaptor<Prop, keyof GenericObject>]
						}
						: {
							[Prop in InferredFirst]: UnFlatObject<
								RemoveFirstFromKey<
									Pick<
										GenericObject,
										Adaptor<InferredPath, keyof GenericObject>
									>,
									InferredFirst
								>
							>
						}
			: never
	) extends infer InferredResult
		? SimplifyTopLevel<UnionToIntersection<InferredResult>>
		: never
	: never;
