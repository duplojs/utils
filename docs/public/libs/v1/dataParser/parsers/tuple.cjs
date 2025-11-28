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
var error = require('../error.cjs');
var kind = require('../kind.cjs');

const tupleKind = kind.createDataParserKind("tuple");
function tuple(shape, definition) {
    const self = base.dataParserInit(tupleKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            rest: definition?.rest,
            shape,
        },
    }, {
        sync: (data, error$1, self) => {
            if (!(data instanceof Array)) {
                return error.SymbolDataParserErrorIssue;
            }
            let output = [];
            const currentIndexPath = error$1.currentPath.length;
            for (let index = 0; index < self.definition.shape.length; index++) {
                error.setErrorPath(error$1, `[${index}]`, currentIndexPath);
                const result = self.definition.shape[index]?.exec(data[index], error$1);
                if (result === base.SymbolDataParserError) {
                    output = base.SymbolDataParserError;
                }
                else if (output !== base.SymbolDataParserError) {
                    output.push(result);
                }
            }
            if (self.definition.rest) {
                for (let index = self.definition.shape.length; index < data.length; index++) {
                    error.setErrorPath(error$1, `[${index}]`, currentIndexPath);
                    const result = self.definition.rest.exec(data[index], error$1);
                    if (result === base.SymbolDataParserError) {
                        output = base.SymbolDataParserError;
                    }
                    else if (output !== base.SymbolDataParserError) {
                        output.push(result);
                    }
                }
            }
            error.popErrorPath(error$1);
            return output;
        },
        async: async (data, error$1, self) => {
            if (!(data instanceof Array)) {
                return error.SymbolDataParserErrorIssue;
            }
            let output = [];
            const currentIndexPath = error$1.currentPath.length;
            for (let index = 0; index < self.definition.shape.length; index++) {
                error.setErrorPath(error$1, `[${index}]`, currentIndexPath);
                const result = await self.definition.shape[index]?.asyncExec(data[index], error$1);
                if (result === base.SymbolDataParserError) {
                    output = base.SymbolDataParserError;
                }
                else if (output !== base.SymbolDataParserError) {
                    output.push(result);
                }
            }
            if (self.definition?.rest) {
                for (let index = self.definition.shape.length; index < data.length; index++) {
                    error.setErrorPath(error$1, `[${index}]`, currentIndexPath);
                    const result = await self.definition.rest.asyncExec(data[index], error$1);
                    if (result === base.SymbolDataParserError) {
                        output = base.SymbolDataParserError;
                    }
                    else if (output !== base.SymbolDataParserError) {
                        output.push(result);
                    }
                }
            }
            error.popErrorPath(error$1);
            return output;
        },
    });
    return tuple.overrideHandler.apply(self);
}
tuple.overrideHandler = override.createOverride("@duplojs/utils/data-parser/tuple");

exports.tuple = tuple;
exports.tupleKind = tupleKind;
