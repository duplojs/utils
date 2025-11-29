'use strict';

require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
require('../../common/globalStore.cjs');
require('../../common/builder.cjs');
require('../../either/bool/falsy.cjs');
require('../../either/bool/truthy.cjs');
require('../../either/bool/base.cjs');
require('../../either/left/create.cjs');
require('../../either/left/error.cjs');
require('../../either/left/fail.cjs');
require('../../either/kind.cjs');
require('../../either/right/success.cjs');
require('../../either/right/create.cjs');
require('../../either/right/ok.cjs');
require('../../either/future/success.cjs');
require('../../either/future/error.cjs');
require('../../either/future/base.cjs');
require('../../either/nullable/empty.cjs');
require('../../either/nullable/filled.cjs');
require('../../either/nullable/base.cjs');
require('../../either/nullish/empty.cjs');
require('../../either/nullish/filled.cjs');
require('../../either/nullish/base.cjs');
require('../../either/optional/empty.cjs');
require('../../either/optional/filled.cjs');
require('../../either/optional/base.cjs');
var override = require('../../common/override.cjs');
var baseExtended = require('../baseExtended.cjs');
var index = require('../parsers/string/index.cjs');
require('../parsers/object/index.cjs');
require('../parsers/number/index.cjs');
require('../parsers/date.cjs');
require('../parsers/literal.cjs');
require('../parsers/union.cjs');
require('../parsers/array/index.cjs');
require('../parsers/bigint/index.cjs');
require('../parsers/tuple.cjs');
require('../parsers/transform.cjs');
require('../parsers/nil.cjs');
require('../parsers/boolean.cjs');
require('../parsers/empty.cjs');
require('../parsers/templateLiteral/index.cjs');
require('../parsers/pipe.cjs');
require('../parsers/optional.cjs');
require('../parsers/nullable.cjs');
require('../parsers/lazy.cjs');
require('../parsers/unknown.cjs');
require('../parsers/record/index.cjs');
require('../parsers/refine.cjs');
require('../parsers/recover.cjs');
var email$1 = require('../parsers/string/checkers/email.cjs');
var url$1 = require('../parsers/string/checkers/url.cjs');
var regex = require('../parsers/string/checkers/regex.cjs');
var max = require('../parsers/string/checkers/max.cjs');
var min = require('../parsers/string/checkers/min.cjs');

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
    });
    return string.overrideHandler.apply(self);
}
string.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/string");
function email(definition) {
    return string({
        checkers: [email$1.checkerEmail(definition)],
    });
}
function url(definition) {
    return string({
        checkers: [url$1.checkerUrl(definition)],
    });
}

exports.email = email;
exports.string = string;
exports.url = url;
