'use strict';

require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../../either/bool/falsy.cjs');
require('../../either/bool/truthy.cjs');
require('../../either/bool/base.cjs');
require('../../either/left/create.cjs');
require('../../either/left/error.cjs');
require('../../either/left/fail.cjs');
require('../../either/kind.cjs');
require('../../either/right/success.cjs');
require('../../either/right/create.cjs');
require('../../either/right/ok.cjs');
require('../../either/future/success.cjs');
require('../../either/future/error.cjs');
require('../../either/future/base.cjs');
require('../../either/nullable/empty.cjs');
require('../../either/nullable/filled.cjs');
require('../../either/nullable/base.cjs');
require('../../either/nullish/empty.cjs');
require('../../either/nullish/filled.cjs');
require('../../either/nullish/base.cjs');
require('../../either/optional/empty.cjs');
require('../../either/optional/filled.cjs');
require('../../either/optional/base.cjs');
var override = require('../../common/override.cjs');
var base = require('../base.cjs');
var kind = require('../kind.cjs');

const pipeKind = kind.createDataParserKind("pipe");
function pipe(input, output, definition) {
    const self = base.dataParserInit(pipeKind, {
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
    return pipe.overrideHandler.apply(self);
}
pipe.overrideHandler = override.createOverride("@duplojs/utils/data-parser/pipe");

exports.pipe = pipe;
exports.pipeKind = pipeKind;
