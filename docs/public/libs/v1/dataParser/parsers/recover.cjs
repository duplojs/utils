'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');

const recoverKind = kind.createDataParserKind("recover");
function recover(inner, recoveredValue, definition) {
    return base.dataParserInit(recoverKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            inner,
            recoveredValue,
        },
    }, {
        sync: (data, error, self) => {
            const result = self.definition.inner.exec(data, error);
            return result === base.SymbolDataParserError
                ? self.definition.recoveredValue
                : result;
        },
        async: async (data, error, self) => {
            const result = await self.definition.inner.asyncExec(data, error);
            return result === base.SymbolDataParserError
                ? self.definition.recoveredValue
                : result;
        },
    });
}

exports.recover = recover;
exports.recoverKind = recoverKind;
