'use strict';

var memo = require('../../common/memo.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
var base = require('../base.cjs');
var kind = require('../kind.cjs');

const lazyKind = kind.createDataParserKind("lazy");
function lazy(getter, definition) {
    return base.dataParserInit(lazyKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            getter: memo.memo(getter),
        },
    }, {
        sync: (data, _error, self) => self.definition.getter.value.exec(data, _error),
        async: (data, _error, self) => self.definition.getter.value.asyncExec(data, _error),
    });
}

exports.lazy = lazy;
exports.lazyKind = lazyKind;
