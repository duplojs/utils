'use strict';

var baseExtended = require('../baseExtended.cjs');
var pipe$1 = require('../parsers/pipe.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/pipe/index.md}
 */
function pipe(input, output, definition) {
    const self = baseExtended.dataParserExtendedInit(pipe$1.pipe(input, output, definition), {}, pipe.overrideHandler);
    return self;
}
pipe.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/pipe");

exports.pipe = pipe;
