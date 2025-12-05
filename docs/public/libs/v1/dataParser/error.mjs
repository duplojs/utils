import { createDataParserKind } from './kind.mjs';

const SymbolDataParserErrorIssueLabel = "SymbolDataParserErrorIssue";
const SymbolDataParserErrorIssue = Symbol.for(SymbolDataParserErrorIssueLabel);
const errorIssueKind = createDataParserKind("error-issue");
const SymbolDataParserErrorPromiseIssueLabel = "SymbolDataParserErrorPromiseIssue";
const SymbolDataParserErrorPromiseIssue = Symbol.for(SymbolDataParserErrorPromiseIssueLabel);
const errorPromiseIssueKind = createDataParserKind("error-issue-promise");
const errorKind = createDataParserKind("error");
function createError() {
    return errorKind.setTo({
        issues: [],
        currentPath: [],
    });
}
function addIssue(error, source, data) {
    error.issues.push(errorIssueKind.setTo({
        source,
        path: error.currentPath.join("."),
        data,
    }));
    return error;
}
function addPromiseIssue(error, source, data) {
    error.issues.push(errorPromiseIssueKind.setTo({
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

export { SymbolDataParserErrorIssue, SymbolDataParserErrorIssueLabel, SymbolDataParserErrorPromiseIssue, SymbolDataParserErrorPromiseIssueLabel, addIssue, addPromiseIssue, createError, errorIssueKind, errorKind, errorPromiseIssueKind, popErrorPath, setErrorPath };
