import { createDataParserKind } from './kind.mjs';

const SymbolDataParserErrorIssueLabel = "SymbolDataParserErrorIssue";
const SymbolDataParserErrorIssue = Symbol.for(SymbolDataParserErrorIssueLabel);
const dataParserErrorIssueKind = createDataParserKind("error-issue");
const SymbolDataParserErrorPromiseIssueLabel = "SymbolDataParserErrorPromiseIssue";
const SymbolDataParserErrorPromiseIssue = Symbol.for(SymbolDataParserErrorPromiseIssueLabel);
const dataParserErrorPromiseIssueKind = createDataParserKind("error-issue-promise");
const dataParserErrorKind = createDataParserKind("error");
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

export { SymbolDataParserErrorIssue, SymbolDataParserErrorIssueLabel, SymbolDataParserErrorPromiseIssue, SymbolDataParserErrorPromiseIssueLabel, addIssue, addPromiseIssue, createError, dataParserErrorIssueKind, dataParserErrorKind, dataParserErrorPromiseIssueKind, popErrorPath, setErrorPath };
