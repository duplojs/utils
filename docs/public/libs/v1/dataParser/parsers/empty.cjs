'use strict';

var kind = require('../../common/kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');

const dataParserEmptyKind = kind.createKind("data-parser-empty");
function empty(definition) {
    return base.dataParserInit(dataParserEmptyKind, {
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

exports.dataParserEmptyKind = dataParserEmptyKind;
exports.empty = empty;
