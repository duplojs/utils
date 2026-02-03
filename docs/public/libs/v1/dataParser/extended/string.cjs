'use strict';

var baseExtended = require('../baseExtended.cjs');
var index = require('../parsers/string/index.cjs');
var email$1 = require('../parsers/string/checkers/email.cjs');
var url$1 = require('../parsers/string/checkers/url.cjs');
var regex = require('../parsers/string/checkers/regex.cjs');
var max = require('../parsers/string/checkers/max.cjs');
var min = require('../parsers/string/checkers/min.cjs');
var override = require('../../common/override.cjs');

/**
 * {@include dataParser/extended/string/index.md}
 */
function string(definition) {
    const self = baseExtended.dataParserExtendedInit(index.string(definition), {
        min(self, min$1, definition) {
            return self.addChecker(min.checkerStringMin(min$1, definition));
        },
        max(self, max$1, definition) {
            return self.addChecker(max.checkerStringMax(max$1, definition));
        },
        regex(self, regex$1, definition) {
            return self.addChecker(regex.checkerStringRegex(regex$1, definition));
        },
    }, string.overrideHandler);
    return self;
}
string.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/string");
/**
 * {@include dataParser/extended/email/index.md}
 */
function email(definition) {
    return string({
        checkers: [email$1.checkerEmail(definition)],
    });
}
/**
 * {@include dataParser/extended/url/index.md}
 */
function url(definition) {
    return string({
        checkers: [url$1.checkerUrl(definition)],
    });
}

exports.email = email;
exports.string = string;
exports.url = url;
