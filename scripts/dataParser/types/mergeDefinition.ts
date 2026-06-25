import { type UnionContain, type SimplifyTopLevel } from "@scripts/common";
import { type DataParserDefinition } from "../base";

export type MergeDefinition<
	GenericDefinition extends DataParserDefinition,
	GenericPartialDefinition extends Partial<GenericDefinition>,
> = SimplifyTopLevel<
	Readonly<
		& Omit<GenericPartialDefinition, "errorMessage">
		& Omit<
			GenericDefinition,
			keyof GenericPartialDefinition | "checkers"
		>
		& (
			UnionContain<
				keyof GenericPartialDefinition,
				"checkers"
			> extends true
				? {}
				: { checkers: readonly [] }
		)
		& (
			UnionContain<
				keyof GenericPartialDefinition,
				"errorMessage"
			> extends true
				? { errorMessage: string }
				: {}
		)
	>
> extends infer InferredResult extends GenericDefinition
	? InferredResult
	: never;
