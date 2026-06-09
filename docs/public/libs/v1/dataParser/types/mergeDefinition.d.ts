import { type UnionContain, type SimplifyTopLevel } from "../../common";
import { type DataParserDefinition } from "../base";
import { type DataParserCheckerDefinition } from "../baseChecker";
export type MergeDefinition<GenericDefinition extends DataParserDefinition | DataParserCheckerDefinition, GenericPartialDefinition extends Partial<GenericDefinition>> = SimplifyTopLevel<Readonly<Omit<GenericPartialDefinition, "errorMessage"> & Omit<GenericDefinition, keyof GenericPartialDefinition | "checkers"> & (UnionContain<keyof GenericPartialDefinition, "checkers"> extends true ? {} : {
    checkers: readonly [];
}) & (UnionContain<keyof GenericPartialDefinition, "errorMessage"> extends true ? {
    errorMessage: string;
} : {})>> extends infer InferredResult extends GenericDefinition ? InferredResult : never;
