'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');

const nilKind = kind.createDataParserKind("nil");
function nil(definition) {
    return base.dataParserInit(nilKind, {
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

exports.nil = nil;
exports.nilKind = nilKind;
