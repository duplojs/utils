import { type Kind } from "@scripts/common";
import { type DataParserTransform } from "./parsers";
import { createDataParserKind } from "./kind";
import { type DataParser } from "./base";
import { type DataParserCheckers } from "./types";

export const SymbolDataParserErrorIssueLabel = "SymbolDataParserErrorIssue";
export const SymbolDataParserErrorIssue = Symbol.for(SymbolDataParserErrorIssueLabel);
export type SymbolDataParserErrorIssue = typeof SymbolDataParserErrorIssue;

export const errorIssueKind = createDataParserKind("error-issue");

export interface DataParserErrorIssue extends Kind<typeof errorIssueKind.definition> {
	readonly source: DataParser | DataParserCheckers;
	readonly path: string;
	readonly data: unknown;
}

export const SymbolDataParserErrorPromiseIssueLabel = "SymbolDataParserErrorPromiseIssue";
export const SymbolDataParserErrorPromiseIssue = Symbol.for(SymbolDataParserErrorPromiseIssueLabel);
export type SymbolDataParserErrorPromiseIssue = typeof SymbolDataParserErrorPromiseIssue;

export const errorPromiseIssueKind = createDataParserKind("error-issue-promise");

export interface DataParserErrorPromiseIssue extends Kind<typeof errorPromiseIssueKind.definition> {
	readonly source: DataParserTransform;
	readonly path: string;
	readonly data: unknown;
}

export const errorKind = createDataParserKind("error");

export interface DataParserError extends Kind<typeof errorKind.definition> {
	readonly issues: (DataParserErrorIssue | DataParserErrorPromiseIssue)[];
	readonly currentPath: string[];
}

export function createError(): DataParserError {
	return errorKind.setTo({
		issues: [],
		currentPath: [],
	});
}

export function addIssue(
	error: DataParserError,
	source: DataParser | DataParserCheckers,
	data: unknown,
) {
	error.issues.push(
		errorIssueKind.setTo({
			source,
			path: error.currentPath.join("."),
			data,
		}),
	);

	return error;
}

export function addPromiseIssue(
	error: DataParserError,
	source: DataParserTransform,
	data: unknown,
) {
	error.issues.push(
		errorPromiseIssueKind.setTo({
			source,
			path: error.currentPath.join("."),
			data,
		}),
	);

	return error;
}

export function setErrorPath(
	error: DataParserError,
	value: string,
	index: number,
) {
	error.currentPath[index] = value;

	return error;
}

export function popErrorPath(
	error: DataParserError,
) {
	error.currentPath.pop();

	return error;
}
