'use strict';

var kind = require('../../common/kind.cjs');
var create = require('./create.cjs');

const eitherOkKind = kind.createKind("either-ok");
function ok() {
    return eitherOkKind.addTo(create.right("ok", undefined));
}

exports.eitherOkKind = eitherOkKind;
exports.ok = ok;
