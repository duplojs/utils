'use strict';

var base = require('../base.cjs');
var kind = require('../kind.cjs');
var override = require('../../common/override.cjs');

const unknownKind = kind.createDataParserKind("unknown");
function unknown(definition) {
    const self = base.dataParserInit(unknownKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
        },
    }, (data) => data);
    return unknown.overrideHandler.apply(self);
}
unknown.overrideHandler = override.createOverride("@duplojs/utils/data-parser/unknown");

exports.unknown = unknown;
exports.unknownKind = unknownKind;
