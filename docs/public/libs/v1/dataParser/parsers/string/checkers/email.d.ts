import { type Kind } from "../../../../common";
import { type DataParserChecker, type DataParserCheckerDefinition } from "../../../base";
export interface DataParserCheckerDefinitionEmail extends DataParserCheckerDefinition {
    normalize?: boolean;
    pattern: RegExp;
}
export declare const dataParserCheckerEmailKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"data-parser-checker-email", unknown>>;
type _DataParserCheckerEmail = (Kind<typeof dataParserCheckerEmailKind.definition> & DataParserChecker<DataParserCheckerDefinitionEmail, string>);
export interface DataParserCheckerEmail extends _DataParserCheckerEmail {
}
export declare function checkerEmail(definition?: Partial<DataParserCheckerDefinitionEmail>): DataParserCheckerEmail;
export declare function email(definition?: Partial<DataParserCheckerDefinitionEmail>): import("..").DataParserString<{
    readonly checkers: readonly [DataParserCheckerEmail];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
export {};
