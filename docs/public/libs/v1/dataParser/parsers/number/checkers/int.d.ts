import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../base";
export interface DataParserCheckerDefinitionInt extends DataParserCheckerDefinition {
}
export declare const dataParserCheckerIntKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"data-parser-checker-int", unknown>>;
type _DataParserCheckerInt = (Kind<typeof dataParserCheckerIntKind.definition> & DataParserChecker<DataParserCheckerDefinitionInt, number>);
export interface DataParserCheckerInt extends _DataParserCheckerInt {
}
export declare function checkerInt(definition?: Partial<DataParserCheckerDefinitionInt>): DataParserCheckerInt;
export declare function int(definition?: Partial<DataParserCheckerDefinitionInt>): import("..").DataParserNumber<{
    readonly checkers: readonly [DataParserCheckerInt];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
export {};
