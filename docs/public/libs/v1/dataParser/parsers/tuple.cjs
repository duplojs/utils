'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');

const tupleKind = kind.createDataParserKind("tuple");
function tuple(shape, definition) {
    return base.dataParserInit(tupleKind, {
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
}

exports.tuple = tuple;
exports.tupleKind = tupleKind;
