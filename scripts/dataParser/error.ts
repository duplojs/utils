import { type Kind } from "@scripts/common";
import { type DataParsers, type Checkers } from "./types";
import { type DataParserTransform } from "./parsers";
import { createDataParserKind } from "./kind";

export const SymbolDataParserErrorIssueLabel = "SymbolDataParserErrorIssue";
export const SymbolDataParserErrorIssue = Symbol.for(SymbolDataParserErrorIssueLabel);
export type SymbolDataParserErrorIssue = typeof SymbolDataParserErrorIssue;

export const dataParserErrorIssueKind = createDataParserKind("error-issue");

export interface DataParserErrorIssue extends Kind<typeof dataParserErrorIssueKind.definition> {
	readonly source: DataParsers | Checkers;
	readonly path: string;
	readonly data: unknown;
}

export const SymbolDataParserErrorPromiseIssueLabel = "SymbolDataParserErrorPromiseIssue";
export const SymbolDataParserErrorPromiseIssue = Symbol.for(SymbolDataParserErrorPromiseIssueLabel);
export type SymbolDataParserErrorPromiseIssue = typeof SymbolDataParserErrorPromiseIssue;

export const dataParserErrorPromiseIssueKind = createDataParserKind("error-issue-promise");

export interface DataParserErrorPromiseIssue extends Kind<typeof dataParserErrorPromiseIssueKind.definition> {
	readonly source: DataParserTransform;
	readonly path: string;
	readonly data: unknown;
}

export const dataParserErrorKind = createDataParserKind("error");

export interface DataParserError extends Kind<typeof dataParserErrorKind.definition> {
	readonly issues: (DataParserErrorIssue | DataParserErrorPromiseIssue)[];
	readonly currentPath: string[];
}

export function createError(): DataParserError {
	return dataParserErrorKind.setTo({
		issues: [],
		currentPath: [],
	});
}

export function addIssue(
	error: DataParserError,
	source: DataParsers | Checkers,
	data: unknown,
) {
	error.issues.push(
		dataParserErrorIssueKind.setTo({
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
		dataParserErrorPromiseIssueKind.setTo({
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
