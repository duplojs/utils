'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');

const dataParserOptionalKind = kind.createDataParserKind("optional");
function optional(inner, definition) {
    return base.dataParserInit(dataParserOptionalKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            inner,
        },
    }, {
        sync: (data, error, self) => {
            if (data === undefined) {
                return data;
            }
            return self.definition.inner.exec(data, error);
        },
        async: async (data, error, self) => {
            if (data === undefined) {
                return data;
            }
            return self.definition.inner.asyncExec(data, error);
        },
    });
}

exports.dataParserOptionalKind = dataParserOptionalKind;
exports.optional = optional;
