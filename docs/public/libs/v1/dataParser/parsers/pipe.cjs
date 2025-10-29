'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');

const dataParserPipeKind = kind.createDataParserKind("pipe");
function pipe(input, output, definition) {
    return base.dataParserInit(dataParserPipeKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            input,
            output,
        },
    }, {
        sync: (data, error, self) => {
            const result = self.definition.input.exec(data, error);
            if (result === base.SymbolDataParserError) {
                return base.SymbolDataParserError;
            }
            return self.definition.output.exec(result, error);
        },
        async: async (data, error, self) => {
            const result = await self.definition.input.asyncExec(data, error);
            if (result === base.SymbolDataParserError) {
                return base.SymbolDataParserError;
            }
            return self.definition.output.asyncExec(result, error);
        },
    });
}

exports.dataParserPipeKind = dataParserPipeKind;
exports.pipe = pipe;
