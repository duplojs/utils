'use strict';

var create = require('./create.cjs');
var kind = require('../../common/kind.cjs');

const eitherSuccessKind = kind.createKind("either-success");
function success(value) {
    return eitherSuccessKind.setTo(create.right("success", value));
}

exports.eitherSuccessKind = eitherSuccessKind;
exports.success = success;
