'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');

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

exports.string = string;
exports.stringKind = stringKind;
