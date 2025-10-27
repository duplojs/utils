'use strict';

var kind = require('../../common/kind.cjs');
var base = require('../base.cjs');

const dataParserLazyKind = kind.createKind("data-parser-lazy");
function lazy(getter, definition) {
    return base.dataParserInit(dataParserLazyKind, {
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

exports.dataParserLazyKind = dataParserLazyKind;
exports.lazy = lazy;
