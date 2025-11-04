'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');

const lazyKind = kind.createDataParserKind("lazy");
function lazy(getter, definition) {
    return base.dataParserInit(lazyKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            getter,
        },
    }, {
        sync: (data, _error, self) => self.definition.getter().exec(data, _error),
        async: (data, _error, self) => self.definition.getter().asyncExec(data, _error),
    });
}

exports.lazy = lazy;
exports.lazyKind = lazyKind;
