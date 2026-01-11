'use strict';

var base = require('../base.cjs');
var base$1 = require('../../primitive/base.cjs');
var email = require('../../../dataParser/parsers/string/checkers/email.cjs');
var url = require('../../../dataParser/parsers/string/checkers/url.cjs');

/**
 * {@include clean/Email/index.md}
 */
const Email = base.createConstraint("email", base$1.String, email.checkerEmail());
/**
 * {@include clean/Url/index.md}
 */
const Url = base.createConstraint("url", base$1.String, url.checkerUrl());

exports.Email = Email;
exports.Url = Url;
