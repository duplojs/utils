import { type RemoveReadonly, type SimplifyTopLevel } from "@scripts/common";
import { type DataParserCheckerDefinition, type DataParserDefinition } from "../base";

export type MergeDefinition<
	GenericDefinition extends DataParserDefinition | DataParserCheckerDefinition,
	GenericPartialDefinition extends Partial<GenericDefinition>,
> = RemoveReadonly<
	& GenericPartialDefinition
	& Omit<GenericDefinition, keyof GenericPartialDefinition>
> extends infer InferredResult extends GenericDefinition
	? InferredResult
	: never;
