'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var coalescing = require('../../array/coalescing.cjs');
var kind = require('../kind.cjs');

const literalKind = kind.createDataParserKind("literal");
function literal(value, definition) {
    return base.dataParserInit(literalKind, {
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

exports.literal = literal;
exports.literalKind = literalKind;
