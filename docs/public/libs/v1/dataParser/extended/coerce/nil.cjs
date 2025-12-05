'use strict';

var nil$1 = require('../nil.cjs');

function nil(definition) {
    return nil$1.nil({
        ...definition,
        coerce: true,
    });
}

exports.nil = nil;
