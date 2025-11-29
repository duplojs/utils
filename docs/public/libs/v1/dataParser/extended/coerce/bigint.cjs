'use strict';

require('../string.cjs');
require('../array.cjs');
var bigint$1 = require('../bigint.cjs');
require('../number.cjs');
require('../date.cjs');
require('../transform.cjs');
require('../union.cjs');
require('../boolean.cjs');
require('../empty.cjs');
require('../lazy.cjs');
require('../literal.cjs');
require('../nil.cjs');
require('../nullable.cjs');
require('../object.cjs');
require('../optional.cjs');
require('../pipe.cjs');
require('../record.cjs');
require('../templateLiteral.cjs');
require('../tuple.cjs');
require('../unknown.cjs');
require('../recover.cjs');
require('../../error.cjs');

function bigint(definition) {
    return bigint$1.bigint({
        ...definition,
        coerce: true,
    });
}

exports.bigint = bigint;
