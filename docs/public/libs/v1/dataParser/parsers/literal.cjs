'use strict';

var kind = require('../../common/kind.cjs');
var coalescing = require('../../array/coalescing.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');

const dataParserLiteralKind = kind.createKind("data-parser-literal");
function literal(value, definition) {
    return base.dataParserInit(dataParserLiteralKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            value: coalescing.coalescing(value),
        },
    }, (data, _error, self) => {
        if (self.definition.value.includes(data)) {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
}

exports.dataParserLiteralKind = dataParserLiteralKind;
exports.literal = literal;
