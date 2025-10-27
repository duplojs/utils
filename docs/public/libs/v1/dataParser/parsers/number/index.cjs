'use strict';

var kind = require('../../../common/kind.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');

const dataParserNumberKind = kind.createKind("data-parser-number");
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
