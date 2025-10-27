'use strict';

var kind = require('../../common/kind.cjs');
var create = require('./create.cjs');

const eitherFailKind = kind.createKind("either-fail");
function fail() {
    return eitherFailKind.setTo(create.left("fail", undefined));
}

exports.eitherFailKind = eitherFailKind;
exports.fail = fail;
