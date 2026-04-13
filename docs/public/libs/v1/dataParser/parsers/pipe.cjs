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
            const currentIndexPath = error$1.currentPath.length;
            error.setErrorPath(error$1, "(pipeIn)", currentIndexPath);
            const resultIn = self.definition.input.exec(data, error$1);
            if (resultIn === error.SymbolDataParserError) {
                error.popErrorPath(error$1);
                return error.SymbolDataParserError;
            }
            error.setErrorPath(error$1, "(pipeOut)", currentIndexPath);
            const resultOut = self.definition.output.exec(resultIn, error$1);
            error.popErrorPath(error$1);
            return resultOut;
        },
        async: async (data, error$1, self) => {
            const currentIndexPath = error$1.currentPath.length;
            error.setErrorPath(error$1, "(pipeIn)", currentIndexPath);
            const resultIn = await self.definition.input.asyncExec(data, error$1);
            if (resultIn === error.SymbolDataParserError) {
                error.popErrorPath(error$1);
                return error.SymbolDataParserError;
            }
            error.setErrorPath(error$1, "(pipeOut)", currentIndexPath);
            return self.definition.output.asyncExec(resultIn, error$1)
                .then((resultOut) => {
                error.popErrorPath(error$1);
                return resultOut;
            });
        },
        isAsynchronous: (self) => self.definition.input.isAsynchronous() || self.definition.output.isAsynchronous(),
    }, pipe.overrideHandler);
    return self;
}
pipe.overrideHandler = override.createOverride("@duplojs/utils/data-parser/pipe");

exports.pipe = pipe;
exports.pipeKind = pipeKind;
