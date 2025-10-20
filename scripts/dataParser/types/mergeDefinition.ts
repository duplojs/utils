import { type UnionContain, type RemoveReadonly } from "@scripts/common";
import { type DataParserCheckerDefinition, type DataParserDefinition } from "../base";

export type MergeDefinition<
	GenericDefinition extends DataParserDefinition | DataParserCheckerDefinition,
	GenericPartialDefinition extends Partial<GenericDefinition>,
> = RemoveReadonly<
	& GenericPartialDefinition
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
			: { checkers: [] }
	)
> extends infer InferredResult extends GenericDefinition
	? InferredResult
	: never;
