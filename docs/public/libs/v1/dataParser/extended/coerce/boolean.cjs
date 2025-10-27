'use strict';

require('../../../pattern/result.cjs');
var boolean$1 = require('../boolean.cjs');

function boolean(definition) {
    return boolean$1.boolean({
        ...definition,
        coerce: true,
    });
}

exports.boolean = boolean;
