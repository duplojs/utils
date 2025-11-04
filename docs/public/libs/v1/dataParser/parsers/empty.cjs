'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');

const emptyKind = kind.createDataParserKind("empty");
function empty(definition) {
    return base.dataParserInit(emptyKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (data === undefined) {
            return data;
        }
        else if (self.definition.coerce && data === "undefined") {
            return undefined;
        }
        return error.SymbolDataParserErrorIssue;
    });
}

exports.empty = empty;
exports.emptyKind = emptyKind;
