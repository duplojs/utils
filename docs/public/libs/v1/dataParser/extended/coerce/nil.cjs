'use strict';

require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
require('../../../pattern/result.cjs');
var nil$1 = require('../nil.cjs');

function nil(definition) {
    return nil$1.nil({
        ...definition,
        coerce: true,
    });
}

exports.nil = nil;
