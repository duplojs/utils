import { createDataParserKind } from './kind.mjs';
import { Printer } from '../common/printer.mjs';
import { unwrap } from '../common/unwrap.mjs';

/* eslint-disable @typescript-eslint/max-params */
const SymbolDataParserErrorLabel = "SymbolDataParserError";
const SymbolDataParserError = Symbol.for(SymbolDataParserErrorLabel);
/**
 * @deprecated
 */
const SymbolDataParserErrorIssueLabel = "SymbolDataParserError";
/**
 * @deprecated
 */
const SymbolDataParserErrorIssue = Symbol.for(SymbolDataParserErrorIssueLabel);
const errorIssueKind = createDataParserKind("error-issue");
const errorKind = createDataParserKind("error");
function createError() {
    return errorKind.setTo({
        issues: [],
        currentPath: [],
    });
}
function addIssue(error, expected, data, message, dataParser) {
    const issue = errorIssueKind.setTo({
        expected,
        path: error.currentPath.join("."),
        data,
        message,
    });
    Object.defineProperty(issue, "getSource", {
        value: () => dataParser,
        enumerable: false,
    });
    error.issues.push(issue);
    return SymbolDataParserError;
}
function setErrorPath(error, value, index) {
    error.currentPath[index] = value;
    return error;
}
function popErrorPath(error) {
    error.currentPath.pop();
    return error;
}
function interpretError(error) {
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
function addAsyncIssue(error, data, dataParser) {
    return addIssue(error, "synchronous result", data, undefined, dataParser);
}

export { SymbolDataParserError, SymbolDataParserErrorIssue, SymbolDataParserErrorIssueLabel, SymbolDataParserErrorLabel, addAsyncIssue, addIssue, createError, errorIssueKind, errorKind, interpretError, popErrorPath, setErrorPath };
