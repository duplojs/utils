'use strict';

var baseExtended = require('../baseExtended.cjs');
var nullable$1 = require('../parsers/nullable.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/nullable/index.md}
 */
function nullable(inner, definition) {
    const self = baseExtended.dataParserExtendedInit(nullable$1.nullable(inner, definition), {
        default: (self, value) => nullable(self.definition.inner, {
            ...self.definition,
            coalescingValue: value,
        }),
    }, nullable.overrideHandler);
    return self;
}
nullable.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/nullable");

exports.nullable = nullable;
