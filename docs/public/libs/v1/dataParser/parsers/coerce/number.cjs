'use strict';

require('../string/index.cjs');
require('../object/index.cjs');
var index = require('../number/index.cjs');
require('../date.cjs');
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

function number(definition) {
    return index.number({
        ...definition,
        coerce: true,
    });
}

exports.number = number;
