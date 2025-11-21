'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../base.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../../pattern/result.cjs');
var recover$1 = require('../parsers/recover.cjs');

function recover(inner, recoveredValue, definition) {
    return baseExtended.dataParserExtendedInit(recover$1.recover(inner, recoveredValue, definition), {});
}

exports.recover = recover;
