'use strict';

var kind = require('../../common/kind.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');

const dataParserTransformKind = kind.createKind("data-parser-transform");
function transform(inner, theFunction, definition) {
    return base.dataParserInit(dataParserTransformKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            inner,
            theFunction,
        },
    }, {
        sync: (data, error$1, self) => {
            const innerResult = self.definition.inner.exec(data, error$1);
            if (innerResult === base.SymbolDataParserError) {
                return base.SymbolDataParserError;
            }
            const result = self.definition.theFunction(innerResult, error$1);
            if (result instanceof Promise) {
                return error.SymbolDataParserErrorPromiseIssue;
            }
            return result;
        },
        async: async (data, error$1, self) => {
            const innerResult = await self.definition.inner.asyncExec(data, error$1);
            if (innerResult === base.SymbolDataParserError) {
                return base.SymbolDataParserError;
            }
            let result = self.definition.theFunction(innerResult, error$1);
            if (result instanceof Promise) {
                result = result.catch(() => error.SymbolDataParserErrorPromiseIssue);
            }
            return result;
        },
    });
}

exports.dataParserTransformKind = dataParserTransformKind;
exports.transform = transform;
