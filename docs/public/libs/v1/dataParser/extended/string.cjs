'use strict';

var base = require('./base.cjs');
var detachObjectMethod = require('../../common/detachObjectMethod.cjs');
var index = require('../parsers/string/index.cjs');
var min = require('../parsers/string/checkers/min.cjs');
var max = require('../parsers/string/checkers/max.cjs');
var regex = require('../parsers/string/checkers/regex.cjs');
var email$1 = require('../parsers/string/checkers/email.cjs');
var url$1 = require('../parsers/string/checkers/url.cjs');
var uuid$1 = require('../parsers/string/checkers/uuid.cjs');

class DataParserStringExtended extends base.DataParserBaseExtended.initExtended(index.DataParserString) {
    get classConstructor() {
        return this.checkConstructor(DataParserStringExtended);
    }
    /**
     * {@include dataParser/extended/string/min/index.md}
     */
    min(min$1, definition) {
        return this.addChecker(min.checkerStringMin(min$1, definition));
    }
    /**
     * {@include dataParser/extended/string/max/index.md}
     */
    max(max$1, definition) {
        return this.addChecker(max.checkerStringMax(max$1, definition));
    }
    /**
     * {@include dataParser/extended/string/regex/index.md}
     */
    regex(regex$1, definition) {
        return this.addChecker(regex.checkerRegex(regex$1, definition));
    }
    /**
     * {@include dataParser/extended/string/index.md}
     */
    static create(definition) {
        return new DataParserStringExtended(this.prepareDefinition(definition));
    }
}
const string = detachObjectMethod.detachObjectMethod(DataParserStringExtended, "create");
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
/**
 * {@include dataParser/extended/uuid/index.md}
 */
function uuid(definition) {
    return string({
        checkers: [uuid$1.checkerUuid(definition)],
    });
}

exports.DataParserStringExtended = DataParserStringExtended;
exports.email = email;
exports.string = string;
exports.url = url;
exports.uuid = uuid;
