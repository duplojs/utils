'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');
var error = require('../error.cjs');
var override = require('../../common/override.cjs');

const pipeKind = kind.createDataParserKind("pipe");
/**
 * {@include dataParser/classic/pipe/index.md}
 */
function pipe(input, output, definition) {
    const self = base.dataParserInit(pipeKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        input,
        output,
    }, {
        sync: (data, error$1, self) => {
            const result = self.definition.input.exec(data, error$1);
            if (result === error.SymbolDataParserError) {
                return error.SymbolDataParserError;
            }
            return self.definition.output.exec(result, error$1);
        },
        async: async (data, error$1, self) => {
            const result = await self.definition.input.asyncExec(data, error$1);
            if (result === error.SymbolDataParserError) {
                return error.SymbolDataParserError;
            }
            return self.definition.output.asyncExec(result, error$1);
        },
        isAsynchronous: (self) => self.definition.input.isAsynchronous() || self.definition.output.isAsynchronous(),
    }, pipe.overrideHandler);
    return self;
}
pipe.overrideHandler = override.createOverride("@duplojs/utils/data-parser/pipe");

exports.pipe = pipe;
exports.pipeKind = pipeKind;
