'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');

const unknownKind = kind.createDataParserKind("unknown");
function unknown(definition) {
    return base.dataParserInit(unknownKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
        },
    }, (data) => data);
}

exports.unknown = unknown;
exports.unknownKind = unknownKind;
