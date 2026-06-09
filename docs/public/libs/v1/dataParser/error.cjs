'use strict';

var kind = require('./kind.cjs');
var printer = require('../common/printer.cjs');
var unwrap = require('../common/unwrap.cjs');

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
const errorIssueKind = kind.createDataParserKind("error-issue");
const errorKind = kind.createDataParserKind("error");
function createError() {
    return errorKind.setTo({
        issues: [],
        currentPath: [],
    });
}
function addIssue(error, expected, data, message) {
    error.issues.push(errorIssueKind.setTo({
        expected,
        path: error.currentPath.join("."),
        data,
        message,
    }));
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
        : unwrap.unwrap(error);
    return printer.Printer.renderParagraph([
        printer.Printer.colorizedBold("Validation failed", "red"),
        dataParserError.issues.map((issue) => printer.Printer.renderParagraph([
            "",
            printer.Printer.renderLine([
                printer.Printer.colorizedBold("✖", "red"),
                printer.Printer.colorizedBold(issue.path || "<root>", "cyan"),
                "expected",
                printer.Printer.colorized(issue.expected, "green"),
                "but received",
                printer.Printer.colorized(printer.Printer.stringify(issue.data), "red"),
            ]),
            issue.message !== undefined && `${printer.Printer.indent(1)}↳ ${issue.message}`,
        ])),
        dataParserError.issues.length === 0 && "No issue found",
    ]);
}
function addAsyncIssue(error, data) {
    return addIssue(error, "synchronous result", data, undefined);
}

exports.SymbolDataParserError = SymbolDataParserError;
exports.SymbolDataParserErrorIssue = SymbolDataParserErrorIssue;
exports.SymbolDataParserErrorIssueLabel = SymbolDataParserErrorIssueLabel;
exports.SymbolDataParserErrorLabel = SymbolDataParserErrorLabel;
exports.addAsyncIssue = addAsyncIssue;
exports.addIssue = addIssue;
exports.createError = createError;
exports.errorIssueKind = errorIssueKind;
exports.errorKind = errorKind;
exports.interpretError = interpretError;
exports.popErrorPath = popErrorPath;
exports.setErrorPath = setErrorPath;
