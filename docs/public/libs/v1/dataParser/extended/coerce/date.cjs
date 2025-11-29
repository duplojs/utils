'use strict';

require('../string.cjs');
require('../array.cjs');
require('../bigint.cjs');
require('../number.cjs');
var date$1 = require('../date.cjs');
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

function date(definition) {
    return date$1.date({
        ...definition,
        coerce: true,
    });
}

exports.date = date;
