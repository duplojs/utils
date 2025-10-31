'use strict';

require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
var nil$1 = require('../nil.cjs');
require('../../../pattern/result.cjs');

function nil(definition) {
    return nil$1.nil({
        ...definition,
        coerce: true,
    });
}

exports.nil = nil;
