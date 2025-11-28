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

const transformKind = kind.createDataParserKind("transform");
function transform(inner, theFunction, definition) {
    const self = base.dataParserInit(transformKind, {
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
    return transform.overrideHandler.apply(self);
}
transform.overrideHandler = override.createOverride("@duplojs/utils/data-parser/transform");

exports.transform = transform;
exports.transformKind = transformKind;
