'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');

const dataParserNumberKind = kind.createDataParserKind("number");
function number(definition) {
    return base.dataParserInit(dataParserNumberKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = Number(data);
            }
            catch { }
        }
        if (typeof data === "number" && !Number.isNaN(data)) {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
}

exports.dataParserNumberKind = dataParserNumberKind;
exports.number = number;
