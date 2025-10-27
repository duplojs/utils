import { type UnionContain, type SimplifyTopLevel } from "../../common";
import { type DataParserCheckerDefinition, type DataParserDefinition } from "../base";
export type MergeDefinition<GenericDefinition extends DataParserDefinition | DataParserCheckerDefinition, GenericPartialDefinition extends Partial<GenericDefinition>> = SimplifyTopLevel<Readonly<GenericPartialDefinition & Omit<GenericDefinition, keyof GenericPartialDefinition | "checkers"> & (UnionContain<keyof GenericPartialDefinition, "checkers"> extends true ? {} : {
    checkers: readonly [];
})>> extends infer InferredResult extends GenericDefinition ? InferredResult : never;
