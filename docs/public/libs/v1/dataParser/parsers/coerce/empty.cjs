'use strict';

require('../string/index.cjs');
require('../object/index.cjs');
require('../number/index.cjs');
require('../date.cjs');
require('../literal.cjs');
require('../union.cjs');
require('../array/index.cjs');
require('../bigint/index.cjs');
require('../tuple.cjs');
require('../transform.cjs');
require('../nil.cjs');
require('../boolean.cjs');
var empty$1 = require('../empty.cjs');
require('../templateLiteral/index.cjs');
require('../pipe.cjs');
require('../optional.cjs');
require('../nullable.cjs');
require('../lazy.cjs');
require('../unknown.cjs');
require('../record/index.cjs');
require('../refine.cjs');
require('../recover.cjs');

function empty(definition) {
    return empty$1.empty({
        ...definition,
        coerce: true,
    });
}

exports.empty = empty;
