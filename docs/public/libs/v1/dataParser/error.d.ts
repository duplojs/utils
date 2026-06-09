import { type Kind } from "../common";
import type * as DEither from "../either";
export declare const SymbolDataParserErrorLabel = "SymbolDataParserError";
export declare const SymbolDataParserError: unique symbol;
export type SymbolDataParserError = typeof SymbolDataParserError;
/**
 * @deprecated
 */
export declare const SymbolDataParserErrorIssueLabel = "SymbolDataParserError";
/**
 * @deprecated
 */
export declare const SymbolDataParserErrorIssue: unique symbol;
/**
 * @deprecated
 */
export type SymbolDataParserErrorIssue = typeof SymbolDataParserErrorIssue;
export declare const errorIssueKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsDataParser/error-issue", unknown>>;
export interface DataParserErrorIssue extends Kind<typeof errorIssueKind.definition> {
    readonly expected: string;
    readonly path: string;
    readonly data: unknown;
    readonly message: string | undefined;
}
export declare const errorKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsDataParser/error", unknown>>;
export interface DataParserError extends Kind<typeof errorKind.definition> {
    readonly issues: DataParserErrorIssue[];
    readonly currentPath: string[];
}
export declare function createError(): DataParserError;
export declare function addIssue(error: DataParserError, expected: string, data: unknown, message: string | undefined): SymbolDataParserError;
export declare function setErrorPath(error: DataParserError, value: string, index: number): DataParserError;
export declare function popErrorPath(error: DataParserError): DataParserError;
export declare function interpretError(error: DataParserError | DEither.Left<string, DataParserError>): string;
export declare function addAsyncIssue(error: DataParserError, data: unknown): SymbolDataParserError;
