'use strict';

var kind = require('../../common/kind.cjs');
var create = require('./create.cjs');

const eitherErrorKind = kind.createKind("either-error");
function error(value) {
    return eitherErrorKind.setTo(create.left("error", value));
}

exports.eitherErrorKind = eitherErrorKind;
exports.error = error;
