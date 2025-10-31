'use strict';

var kind = require('./kind.cjs');

const SymbolDataParserErrorIssueLabel = "SymbolDataParserErrorIssue";
const SymbolDataParserErrorIssue = Symbol.for(SymbolDataParserErrorIssueLabel);
const dataParserErrorIssueKind = kind.createDataParserKind("error-issue");
const SymbolDataParserErrorPromiseIssueLabel = "SymbolDataParserErrorPromiseIssue";
const SymbolDataParserErrorPromiseIssue = Symbol.for(SymbolDataParserErrorPromiseIssueLabel);
const dataParserErrorPromiseIssueKind = kind.createDataParserKind("error-issue-promise");
const dataParserErrorKind = kind.createDataParserKind("error");
function createError() {
    return dataParserErrorKind.setTo({
        issues: [],
        currentPath: [],
    });
}
function addIssue(error, source, data) {
    error.issues.push(dataParserErrorIssueKind.setTo({
        source,
        path: error.currentPath.join("."),
        data,
    }));
    return error;
}
function addPromiseIssue(error, source, data) {
    error.issues.push(dataParserErrorPromiseIssueKind.setTo({
        source,
        path: error.currentPath.join("."),
        data,
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
exports.dataParserErrorIssueKind = dataParserErrorIssueKind;
exports.dataParserErrorKind = dataParserErrorKind;
exports.dataParserErrorPromiseIssueKind = dataParserErrorPromiseIssueKind;
exports.popErrorPath = popErrorPath;
exports.setErrorPath = setErrorPath;
