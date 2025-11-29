'use strict';

require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
var memo = require('../../common/memo.cjs');
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

const lazyKind = kind.createDataParserKind("lazy");
function lazy(getter, definition) {
    const self = base.dataParserInit(lazyKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            getter: memo.memo(getter),
        },
    }, {
        sync: (data, _error, self) => self.definition.getter.value.exec(data, _error),
        async: (data, _error, self) => self.definition.getter.value.asyncExec(data, _error),
    });
    return lazy.overrideHandler.apply(self);
}
lazy.overrideHandler = override.createOverride("@duplojs/utils/data-parser/lazy");

exports.lazy = lazy;
exports.lazyKind = lazyKind;
