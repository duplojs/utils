'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');

const dataParserNilKind = kind.createDataParserKind("nil");
function nil(definition) {
    return base.dataParserInit(dataParserNilKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (data === null) {
            return data;
        }
        else if (self.definition.coerce && data === "null") {
            return null;
        }
        return error.SymbolDataParserErrorIssue;
    });
}

exports.dataParserNilKind = dataParserNilKind;
exports.nil = nil;
