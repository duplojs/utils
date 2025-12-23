'use strict';

var kind = require('../kind.cjs');
var create = require('./create.cjs');

const eitherOkKind = kind.createEitherKind("ok");
function ok() {
    return eitherOkKind.setTo(create.right("ok", undefined));
}

exports.eitherOkKind = eitherOkKind;
exports.ok = ok;
