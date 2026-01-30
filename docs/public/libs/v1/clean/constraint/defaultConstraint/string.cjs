'use strict';

var base = require('../base.cjs');
var base$1 = require('../../primitive/base.cjs');
var email = require('../../../dataParser/parsers/string/checkers/email.cjs');
var url = require('../../../dataParser/parsers/string/checkers/url.cjs');
var min = require('../../../dataParser/parsers/string/checkers/min.cjs');
var max = require('../../../dataParser/parsers/string/checkers/max.cjs');

/**
 * {@include clean/Email/index.md}
 */
const Email = base.createConstraint("email", base$1.String, email.checkerEmail());
/**
 * {@include clean/Url/index.md}
 */
const Url = base.createConstraint("url", base$1.String, url.checkerUrl());
/**
 * {@include clean/StringMin/index.md}
 */
function StringMin(value) {
    return base.createConstraint(`string-min-${value}`, base$1.String, min.checkerStringMin(value));
}
/**
 * {@include clean/StringMax/index.md}
 */
function StringMax(value) {
    return base.createConstraint(`string-max-${value}`, base$1.String, max.checkerStringMax(value));
}

exports.Email = Email;
exports.StringMax = StringMax;
exports.StringMin = StringMin;
exports.Url = Url;
