import { type Kind, pipe, Printer, unwrap } from "@scripts/common";
import { createDataParserKind } from "./kind";
import type * as DEither from "@scripts/either";

export const SymbolDataParserErrorLabel = "SymbolDataParserError";
export const SymbolDataParserError = Symbol.for(SymbolDataParserErrorLabel);
export type SymbolDataParserError = typeof SymbolDataParserError;

/**
 * @deprecated
 */
export const SymbolDataParserErrorIssueLabel = "SymbolDataParserError";

/**
 * @deprecated
 */
export const SymbolDataParserErrorIssue = Symbol.for(SymbolDataParserErrorIssueLabel);

/**
 * @deprecated
 */
export type SymbolDataParserErrorIssue = typeof SymbolDataParserErrorIssue;

export const errorIssueKind = createDataParserKind("error-issue");

export interface DataParserErrorIssue extends Kind<typeof errorIssueKind.definition> {
	readonly expected: string;
	readonly path: string;
	readonly data: unknown;
	readonly message: string | undefined;
}

export const errorKind = createDataParserKind("error");

export interface DataParserError extends Kind<typeof errorKind.definition> {
	readonly issues: DataParserErrorIssue[];
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
	expected: string,
	data: unknown,
	message: string | undefined,
): SymbolDataParserError {
	error.issues.push(
		errorIssueKind.setTo({
			expected,
			path: error.currentPath.join("."),
			data,
			message,
		}),
	);

	return SymbolDataParserError;
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

export function interpretError(error: DataParserError | DEither.Left<string, DataParserError>) {
	const dataParserError = errorKind.has(error)
		? error
		: unwrap(error);

	return Printer.renderParagraph([
		Printer.colorizedBold("Validation failed", "red"),
		dataParserError.issues.map((issue) => Printer.renderParagraph([
			"",
			Printer.renderLine([
				Printer.colorizedBold("✖", "red"),
				Printer.colorizedBold(issue.path || "<root>", "cyan"),
				"expected",
				Printer.colorized(issue.expected, "green"),
				"but received",
				Printer.colorized(Printer.stringify(issue.data), "red"),
			]),
			issue.message !== undefined && `${Printer.indent(1)}↳ ${issue.message}`,
		])),
		dataParserError.issues.length === 0 && "No issue found",
	]);
}
