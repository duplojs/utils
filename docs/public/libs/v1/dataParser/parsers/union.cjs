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

const unionKind = kind.createDataParserKind("union");
function union(options, definition) {
    const self = base.dataParserInit(unionKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            options,
        },
    }, {
        sync: (data, error$1, self) => {
            for (const dataParser of self.definition.options) {
                const result = dataParser.exec(data, error$1);
                if (result !== base.SymbolDataParserError) {
                    return result;
                }
            }
            return error.SymbolDataParserErrorIssue;
        },
        async: async (data, error$1, self) => {
            for (const dataParser of self.definition.options) {
                const result = await dataParser.asyncExec(data, error$1);
                if (result !== base.SymbolDataParserError) {
                    return result;
                }
            }
            return error.SymbolDataParserErrorIssue;
        },
    });
    return union.overrideHandler.apply(self);
}
union.overrideHandler = override.createOverride("@duplojs/utils/data-parser/union");

exports.union = union;
exports.unionKind = unionKind;
