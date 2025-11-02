import { type Kind } from "../common";
import { type DataParserTransform } from "./parsers";
import { type DataParser } from "./base";
import { type DataParserCheckers } from "./types";
export declare const SymbolDataParserErrorIssueLabel = "SymbolDataParserErrorIssue";
export declare const SymbolDataParserErrorIssue: unique symbol;
export type SymbolDataParserErrorIssue = typeof SymbolDataParserErrorIssue;
export declare const errorIssueKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsDataParser/error-issue", unknown>>;
export interface DataParserErrorIssue extends Kind<typeof errorIssueKind.definition> {
    readonly source: DataParser | DataParserCheckers;
    readonly path: string;
    readonly data: unknown;
}
export declare const SymbolDataParserErrorPromiseIssueLabel = "SymbolDataParserErrorPromiseIssue";
export declare const SymbolDataParserErrorPromiseIssue: unique symbol;
export type SymbolDataParserErrorPromiseIssue = typeof SymbolDataParserErrorPromiseIssue;
export declare const errorPromiseIssueKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsDataParser/error-issue-promise", unknown>>;
export interface DataParserErrorPromiseIssue extends Kind<typeof errorPromiseIssueKind.definition> {
    readonly source: DataParserTransform;
    readonly path: string;
    readonly data: unknown;
}
export declare const errorKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsDataParser/error", unknown>>;
export interface DataParserError extends Kind<typeof errorKind.definition> {
    readonly issues: (DataParserErrorIssue | DataParserErrorPromiseIssue)[];
    readonly currentPath: string[];
}
export declare function createError(): DataParserError;
export declare function addIssue(error: DataParserError, source: DataParser | DataParserCheckers, data: unknown): DataParserError;
export declare function addPromiseIssue(error: DataParserError, source: DataParserTransform, data: unknown): DataParserError;
export declare function setErrorPath(error: DataParserError, value: string, index: number): DataParserError;
export declare function popErrorPath(error: DataParserError): DataParserError;
