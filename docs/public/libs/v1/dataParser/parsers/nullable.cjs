'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');
var override = require('../../common/override.cjs');

const nullableKind = kind.createDataParserKind("nullable");
/**
 * {@include dataParser/classic/nullable/index.md}
 */
function nullable(inner, definition) {
    const self = base.dataParserInit(nullableKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        inner,
        coalescingValue: definition?.coalescingValue ?? null,
    }, {
        sync: (data, error, self) => {
            if (data === null) {
                return self.definition.coalescingValue;
            }
            return self.definition.inner.exec(data, error);
        },
        async: async (data, error, self) => {
            if (data === null) {
                return self.definition.coalescingValue;
            }
            return self.definition.inner.asyncExec(data, error);
        },
        isAsynchronous: (self) => self.definition.inner.isAsynchronous(),
    }, nullable.overrideHandler);
    return self;
}
nullable.overrideHandler = override.createOverride("@duplojs/utils/data-parser/nullable");

exports.nullable = nullable;
exports.nullableKind = nullableKind;
