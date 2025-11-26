'use strict';

require('../string/index.cjs');
require('../object.cjs');
require('../number/index.cjs');
var date$1 = require('../date.cjs');
require('../literal.cjs');
require('../union.cjs');
require('../array/index.cjs');
require('../bigint/index.cjs');
require('../tuple.cjs');
require('../transform.cjs');
require('../nil.cjs');
require('../boolean.cjs');
require('../empty.cjs');
require('../templateLiteral/index.cjs');
require('../pipe.cjs');
require('../optional.cjs');
require('../nullable.cjs');
require('../lazy.cjs');
require('../unknown.cjs');
require('../record/index.cjs');
require('../refine.cjs');
require('../recover.cjs');

function date(definition) {
    return date$1.date({
        ...definition,
        coerce: true,
    });
}

exports.date = date;
