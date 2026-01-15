'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');
var override = require('../../common/override.cjs');

const tupleKind = kind.createDataParserKind("tuple");
/**
 * {@include dataParser/classic/tuple/index.md}
 */
function tuple(shape, definition) {
    const self = base.dataParserInit(tupleKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        rest: definition?.rest,
        shape,
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
            void (self.definition.shape.length && error.popErrorPath(error$1));
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
            void (self.definition.shape.length && error.popErrorPath(error$1));
            return output;
        },
    }, tuple.overrideHandler);
    return self;
}
tuple.overrideHandler = override.createOverride("@duplojs/utils/data-parser/tuple");

exports.tuple = tuple;
exports.tupleKind = tupleKind;
