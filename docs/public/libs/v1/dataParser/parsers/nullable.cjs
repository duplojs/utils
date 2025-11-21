'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');

const nullableKind = kind.createDataParserKind("nullable");
function nullable(inner, definition) {
    return base.dataParserInit(nullableKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            inner,
            coalescingValue: definition?.coalescingValue ?? null,
        },
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
    });
}

exports.nullable = nullable;
exports.nullableKind = nullableKind;
