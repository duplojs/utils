'use strict';

var entries = require('../../../object/entries.cjs');
var pipe = require('../../../common/pipe.cjs');
require('../../../common/stringToBytes.cjs');
require('../../../common/stringToMillisecond.cjs');
var forward = require('../../../common/forward.cjs');
var memo = require('../../../common/memo.cjs');
var filter = require('../../../array/filter.cjs');
var map = require('../../../array/map.cjs');
require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
require('../../../either/bool/falsy.cjs');
require('../../../either/bool/truthy.cjs');
require('../../../either/bool/base.cjs');
require('../../../either/left/create.cjs');
require('../../../either/left/error.cjs');
require('../../../either/left/fail.cjs');
require('../../../either/kind.cjs');
require('../../../either/right/success.cjs');
require('../../../either/right/create.cjs');
require('../../../either/right/ok.cjs');
require('../../../either/future/success.cjs');
require('../../../either/future/error.cjs');
require('../../../either/future/base.cjs');
require('../../../either/nullable/empty.cjs');
require('../../../either/nullable/filled.cjs');
require('../../../either/nullable/base.cjs');
require('../../../either/nullish/empty.cjs');
require('../../../either/nullish/filled.cjs');
require('../../../either/nullish/base.cjs');
require('../../../either/optional/empty.cjs');
require('../../../either/optional/filled.cjs');
require('../../../either/optional/base.cjs');
var override = require('../../../common/override.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');

const objectKind = kind.createDataParserKind("object");
function object(shape, definition) {
    const self = base.dataParserInit(objectKind, {
        definition: {
            shape,
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            optimizedShape: memo.memo(() => pipe.pipe(forward.forward(shape), entries.entries, filter.filter((entry) => base.dataParserKind.has(entry[1])), map.map(([key, value]) => ({
                key,
                value,
            })))),
        },
    }, {
        sync: (data, error$1, self) => {
            if (!data
                || typeof data !== "object"
                || data instanceof Array) {
                return error.SymbolDataParserErrorIssue;
            }
            let output = {};
            const currentIndexPath = error$1.currentPath.length;
            for (const entry of self.definition.optimizedShape.value) {
                error.setErrorPath(error$1, entry.key, currentIndexPath);
                const result = entry.value.exec(data[entry.key], error$1);
                if (result === base.SymbolDataParserError) {
                    output = base.SymbolDataParserError;
                }
                else if (output !== base.SymbolDataParserError
                    && result !== undefined) {
                    output[entry.key] = result;
                }
            }
            error.popErrorPath(error$1);
            return output;
        },
        async: async (data, error$1, self) => {
            if (!data
                || typeof data !== "object"
                || data instanceof Array) {
                return error.SymbolDataParserErrorIssue;
            }
            let output = {};
            const currentIndexPath = error$1.currentPath.length;
            for (const entry of self.definition.optimizedShape.value) {
                error.setErrorPath(error$1, entry.key, currentIndexPath);
                const result = await entry.value.asyncExec(data[entry.key], error$1);
                if (result === base.SymbolDataParserError) {
                    output = base.SymbolDataParserError;
                }
                else if (output !== base.SymbolDataParserError
                    && result !== undefined) {
                    output[entry.key] = result;
                }
            }
            error.popErrorPath(error$1);
            return output;
        },
    });
    return object.overrideHandler.apply(self);
}
object.overrideHandler = override.createOverride("@duplojs/utils/data-parser/object");

exports.object = object;
exports.objectKind = objectKind;
