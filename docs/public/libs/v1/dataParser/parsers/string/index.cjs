'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');

const dataParserStringKind = kind.createDataParserKind("string");
function string(definition) {
    return base.dataParserInit(dataParserStringKind, {
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

exports.dataParserStringKind = dataParserStringKind;
exports.string = string;
