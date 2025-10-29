'use strict';

var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');

const dataParserArrayKind = kind.createDataParserKind("array");
function array(element, definition) {
    return base.dataParserInit(dataParserArrayKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            element,
        },
    }, {
        sync: (data, error$1, self) => {
            if (!(data instanceof Array)) {
                return error.SymbolDataParserErrorIssue;
            }
            let output = [];
            const currentIndexPath = error$1.currentPath.length;
            for (let index = 0; index < data.length; index++) {
                error.setErrorPath(error$1, `[${index}]`, currentIndexPath);
                const result = self
                    .definition
                    .element
                    .exec(data[index], error$1);
                if (result === base.SymbolDataParserError) {
                    output = base.SymbolDataParserError;
                }
                else if (output !== base.SymbolDataParserError) {
                    output.push(result);
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
            for (let index = 0; index < data.length; index++) {
                error.setErrorPath(error$1, `[${index}]`, currentIndexPath);
                const result = await self
                    .definition
                    .element
                    .asyncExec(data[index], error$1);
                if (result === base.SymbolDataParserError) {
                    output = base.SymbolDataParserError;
                }
                else if (output !== base.SymbolDataParserError) {
                    output.push(result);
                }
            }
            error.popErrorPath(error$1);
            return output;
        },
    });
}

exports.array = array;
exports.dataParserArrayKind = dataParserArrayKind;
