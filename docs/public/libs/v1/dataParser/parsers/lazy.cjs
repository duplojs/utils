'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');
var memo = require('../../common/memo.cjs');
var override = require('../../common/override.cjs');

const lazyKind = kind.createDataParserKind("lazy");
/**
 * {@include dataParser/classic/lazy/index.md}
 */
function lazy(getter, definition) {
    const self = base.dataParserInit(lazyKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        getter: memo.memo(getter),
    }, {
        sync: (data, _error, self) => self.definition.getter.value.exec(data, _error),
        async: (data, _error, self) => self.definition.getter.value.asyncExec(data, _error),
        isAsynchronous: (self) => self.definition.getter.value.isAsynchronous(),
    }, lazy.overrideHandler);
    return self;
}
lazy.overrideHandler = override.createOverride("@duplojs/utils/data-parser/lazy");

exports.lazy = lazy;
exports.lazyKind = lazyKind;
