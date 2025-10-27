'use strict';

var kind = require('../../common/kind.cjs');
var base = require('../base.cjs');

const dataParserNullableKind = kind.createKind("data-parser-nullable");
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
