'use strict';

var baseExtended = require('../baseExtended.cjs');
require('../parsers/string/index.cjs');
require('../parsers/object.cjs');
require('../parsers/number/index.cjs');
require('../parsers/date.cjs');
require('../parsers/literal.cjs');
require('../parsers/union.cjs');
require('../parsers/array/index.cjs');
require('../parsers/bigint/index.cjs');
require('../parsers/tuple.cjs');
require('../parsers/transform.cjs');
require('../parsers/nil.cjs');
require('../parsers/boolean.cjs');
require('../parsers/empty.cjs');
require('../parsers/templateLiteral/index.cjs');
require('../parsers/pipe.cjs');
require('../parsers/optional.cjs');
require('../parsers/nullable.cjs');
require('../parsers/lazy.cjs');
var unknown$1 = require('../parsers/unknown.cjs');
require('../parsers/record/index.cjs');
require('../parsers/refine.cjs');
require('../parsers/recover.cjs');

function unknown(definition) {
    return baseExtended.dataParserExtendedInit(unknown$1.unknown(definition), {});
}

exports.unknown = unknown;
