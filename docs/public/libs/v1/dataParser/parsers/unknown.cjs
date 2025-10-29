'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');

const dataParserUnknownKind = kind.createDataParserKind("unknown");
function unknown(definition) {
    return base.dataParserInit(dataParserUnknownKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
        },
    }, (data) => data);
}

exports.dataParserUnknownKind = dataParserUnknownKind;
exports.unknown = unknown;
