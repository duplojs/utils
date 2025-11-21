'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../base.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../../pattern/result.cjs');
var pipe$1 = require('../parsers/pipe.cjs');

function pipe(input, output, definition) {
    return baseExtended.dataParserExtendedInit(pipe$1.pipe(input, output, definition), {});
}

exports.pipe = pipe;
