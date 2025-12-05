'use strict';

var baseExtended = require('../baseExtended.cjs');
var pipe$1 = require('../parsers/pipe.cjs');
var override = require('../../common/override.cjs');

function pipe(input, output, definition) {
    const self = baseExtended.dataParserExtendedInit(pipe$1.pipe(input, output, definition), {});
    return pipe.overrideHandler.apply(self);
}
pipe.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/pipe");

exports.pipe = pipe;
