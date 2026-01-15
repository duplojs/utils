'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');
var override = require('../../common/override.cjs');

const optionalKind = kind.createDataParserKind("optional");
/**
 * {@include dataParser/classic/optional/index.md}
 */
function optional(inner, definition) {
    const self = base.dataParserInit(optionalKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        inner,
        coalescingValue: definition?.coalescingValue,
    }, {
        sync: (data, error, self) => {
            if (data === undefined) {
                return self.definition.coalescingValue;
            }
            return self.definition.inner.exec(data, error);
        },
        async: async (data, error, self) => {
            if (data === undefined) {
                return self.definition.coalescingValue;
            }
            return self.definition.inner.asyncExec(data, error);
        },
    }, optional.overrideHandler);
    return self;
}
optional.overrideHandler = override.createOverride("@duplojs/utils/data-parser/optional");

exports.optional = optional;
exports.optionalKind = optionalKind;
