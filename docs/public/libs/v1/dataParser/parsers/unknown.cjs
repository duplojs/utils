'use strict';

var kind = require('../../common/kind.cjs');
var base = require('../base.cjs');

const dataParserUnknownKind = kind.createKind("data-parser-unknown");
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
