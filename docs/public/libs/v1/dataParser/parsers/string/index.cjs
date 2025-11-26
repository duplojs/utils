'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');
var url = require('./checkers/url.cjs');
var email = require('./checkers/email.cjs');
var max = require('./checkers/max.cjs');
var min = require('./checkers/min.cjs');
var regex = require('./checkers/regex.cjs');

const stringKind = kind.createDataParserKind("string");
function string(definition) {
    return base.dataParserInit(stringKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = String(data);
            }
            catch { }
        }
        if (typeof data === "string") {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
}

exports.checkerUrl = url.checkerUrl;
exports.checkerUrlKind = url.checkerUrlKind;
exports.url = url.url;
exports.checkerEmail = email.checkerEmail;
exports.checkerEmailKind = email.checkerEmailKind;
exports.email = email.email;
exports.checkerStringMax = max.checkerStringMax;
exports.checkerStringMaxKind = max.checkerStringMaxKind;
exports.checkerStringMin = min.checkerStringMin;
exports.checkerStringMinKind = min.checkerStringMinKind;
exports.checkerStringRegex = regex.checkerStringRegex;
exports.checkerStringRegexKind = regex.checkerStringRegexKind;
exports.string = string;
exports.stringKind = stringKind;
