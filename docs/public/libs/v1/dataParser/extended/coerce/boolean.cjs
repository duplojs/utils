'use strict';

require('../string.cjs');
require('../array.cjs');
require('../bigint.cjs');
require('../number.cjs');
require('../date.cjs');
require('../transform.cjs');
require('../union.cjs');
var boolean$1 = require('../boolean.cjs');
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

function boolean(definition) {
    return boolean$1.boolean({
        ...definition,
        coerce: true,
    });
}

exports.boolean = boolean;
