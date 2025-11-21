'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');

const optionalKind = kind.createDataParserKind("optional");
function optional(inner, definition) {
    return base.dataParserInit(optionalKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            inner,
            coalescingValue: definition?.coalescingValue,
        },
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
    });
}

exports.optional = optional;
exports.optionalKind = optionalKind;
