'use strict';

var kind = require('./kind.cjs');

const SymbolDataParserErrorIssueLabel = "SymbolDataParserErrorIssue";
const SymbolDataParserErrorIssue = Symbol.for(SymbolDataParserErrorIssueLabel);
const errorIssueKind = kind.createDataParserKind("error-issue");
const SymbolDataParserErrorPromiseIssueLabel = "SymbolDataParserErrorPromiseIssue";
const SymbolDataParserErrorPromiseIssue = Symbol.for(SymbolDataParserErrorPromiseIssueLabel);
const errorPromiseIssueKind = kind.createDataParserKind("error-issue-promise");
const errorKind = kind.createDataParserKind("error");
function createError() {
    return errorKind.setTo({
        issues: [],
        currentPath: [],
    });
}
function addIssue(error, source, data, moreInformation) {
    error.issues.push(errorIssueKind.setTo({
        source,
        path: error.currentPath.join("."),
        data,
        moreInformation,
    }));
    return error;
}
function addPromiseIssue(error, source, data, moreInformation) {
    error.issues.push(errorPromiseIssueKind.setTo({
        source,
        path: error.currentPath.join("."),
        data,
        moreInformation,
    }));
    return error;
}
function setErrorPath(error, value, index) {
    error.currentPath[index] = value;
    return error;
}
function popErrorPath(error) {
    error.currentPath.pop();
    return error;
}

exports.SymbolDataParserErrorIssue = SymbolDataParserErrorIssue;
exports.SymbolDataParserErrorIssueLabel = SymbolDataParserErrorIssueLabel;
exports.SymbolDataParserErrorPromiseIssue = SymbolDataParserErrorPromiseIssue;
exports.SymbolDataParserErrorPromiseIssueLabel = SymbolDataParserErrorPromiseIssueLabel;
exports.addIssue = addIssue;
exports.addPromiseIssue = addPromiseIssue;
exports.createError = createError;
exports.errorIssueKind = errorIssueKind;
exports.errorKind = errorKind;
exports.errorPromiseIssueKind = errorPromiseIssueKind;
exports.popErrorPath = popErrorPath;
exports.setErrorPath = setErrorPath;
