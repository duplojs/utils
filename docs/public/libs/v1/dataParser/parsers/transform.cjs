'use strict';

var base = require('../base.cjs');
var error = require('../error.cjs');
var kind = require('../kind.cjs');
var override = require('../../common/override.cjs');

const transformKind = kind.createDataParserKind("transform");
/**
 * {@include dataParser/classic/transform/index.md}
 */
function transform(inner, theFunction, definition) {
    const self = base.dataParserInit(transformKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        inner,
        theFunction,
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
        isAsynchronous: (self) => self.definition.theFunction.constructor.name === "AsyncFunction",
    }, transform.overrideHandler);
    return self;
}
transform.overrideHandler = override.createOverride("@duplojs/utils/data-parser/transform");

exports.transform = transform;
exports.transformKind = transformKind;
