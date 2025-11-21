'use strict';

require('../../base.cjs');
require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
var boolean$1 = require('../boolean.cjs');
require('../../../pattern/result.cjs');

function boolean(definition) {
    return boolean$1.boolean({
        ...definition,
        coerce: true,
    });
}

exports.boolean = boolean;
