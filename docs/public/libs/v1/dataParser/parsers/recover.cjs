'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');
var override = require('../../common/override.cjs');

const recoverKind = kind.createDataParserKind("recover");
/**
 * {@include dataParser/classic/recover/index.md}
 */
function recover(inner, recoveredValue, definition) {
    const self = base.dataParserInit(recoverKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        inner,
        recoveredValue,
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
    return recover.overrideHandler.apply(self);
}
recover.overrideHandler = override.createOverride("@duplojs/utils/data-parser/recover");

exports.recover = recover;
exports.recoverKind = recoverKind;
