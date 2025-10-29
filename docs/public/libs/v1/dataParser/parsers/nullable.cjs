'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');

const dataParserNullableKind = kind.createDataParserKind("nullable");
function nullable(inner, definition) {
    return base.dataParserInit(dataParserNullableKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            inner,
        },
    }, {
        sync: (data, error, self) => {
            if (data === null) {
                return data;
            }
            return self.definition.inner.exec(data, error);
        },
        async: async (data, error, self) => {
            if (data === null) {
                return data;
            }
            return self.definition.inner.asyncExec(data, error);
        },
    });
}

exports.dataParserNullableKind = dataParserNullableKind;
exports.nullable = nullable;
