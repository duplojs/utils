import { type Kind } from "../common";
import { type DataParsers, type Checkers } from "./types";
import { type DataParserTransform } from "./parsers";
export declare const SymbolDataParserErrorIssueLabel = "SymbolDataParserErrorIssue";
export declare const SymbolDataParserErrorIssue: unique symbol;
export type SymbolDataParserErrorIssue = typeof SymbolDataParserErrorIssue;
export declare const dataParserErrorIssueKind: import("../common").KindHandler<import("../common").KindDefinition<"data-parser-error-issue", unknown>>;
export interface DataParserErrorIssue extends Kind<typeof dataParserErrorIssueKind.definition> {
    readonly source: DataParsers | Checkers;
    readonly path: string;
    readonly data: unknown;
}
export declare const SymbolDataParserErrorPromiseIssueLabel = "SymbolDataParserErrorPromiseIssue";
export declare const SymbolDataParserErrorPromiseIssue: unique symbol;
export type SymbolDataParserErrorPromiseIssue = typeof SymbolDataParserErrorPromiseIssue;
export declare const dataParserErrorPromiseIssueKind: import("../common").KindHandler<import("../common").KindDefinition<"data-parser-error-issue-promise", unknown>>;
export interface DataParserErrorPromiseIssue extends Kind<typeof dataParserErrorPromiseIssueKind.definition> {
    readonly source: DataParserTransform;
    readonly path: string;
    readonly data: unknown;
}
export declare const dataParserErrorKind: import("../common").KindHandler<import("../common").KindDefinition<"data-parser-error", unknown>>;
export interface DataParserError extends Kind<typeof dataParserErrorKind.definition> {
    readonly issues: (DataParserErrorIssue | DataParserErrorPromiseIssue)[];
    readonly currentPath: string[];
}
export declare function createError(): DataParserError;
export declare function addIssue(error: DataParserError, source: DataParsers | Checkers, data: unknown): DataParserError;
export declare function addPromiseIssue(error: DataParserError, source: DataParserTransform, data: unknown): DataParserError;
export declare function setErrorPath(error: DataParserError, value: string, index: number): DataParserError;
export declare function popErrorPath(error: DataParserError): DataParserError;
