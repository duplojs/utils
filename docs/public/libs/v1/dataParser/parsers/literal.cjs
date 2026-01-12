'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');
var coalescing = require('../../array/coalescing.cjs');
var override = require('../../common/override.cjs');

const literalKind = kind.createDataParserKind("literal");
/**
 * {@include dataParser/classic/literal/index.md}
 */
function literal(value, definition) {
    const self = base.dataParserInit(literalKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        value: coalescing.coalescing(value),
    }, (data, _error, self) => {
        if (self.definition.value.includes(data)) {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
    return literal.overrideHandler.apply(self);
}
literal.overrideHandler = override.createOverride("@duplojs/utils/data-parser/literal");

exports.literal = literal;
exports.literalKind = literalKind;
