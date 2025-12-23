'use strict';

var kind = require('../kind.cjs');
var create = require('./create.cjs');

const eitherFailKind = kind.createEitherKind("fail");
function fail() {
    return eitherFailKind.setTo(create.left("fail", undefined));
}

exports.eitherFailKind = eitherFailKind;
exports.fail = fail;
