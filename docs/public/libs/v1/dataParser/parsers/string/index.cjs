'use strict';

require('../../../common/stringToBytes.cjs');
require('../../../common/stringToMillisecond.cjs');
require('../../../common/globalStore.cjs');
require('../../../common/builder.cjs');
require('../../../either/bool/falsy.cjs');
require('../../../either/bool/truthy.cjs');
require('../../../either/bool/base.cjs');
require('../../../either/left/create.cjs');
require('../../../either/left/error.cjs');
require('../../../either/left/fail.cjs');
require('../../../either/kind.cjs');
require('../../../either/right/success.cjs');
require('../../../either/right/create.cjs');
require('../../../either/right/ok.cjs');
require('../../../either/future/success.cjs');
require('../../../either/future/error.cjs');
require('../../../either/future/base.cjs');
require('../../../either/nullable/empty.cjs');
require('../../../either/nullable/filled.cjs');
require('../../../either/nullable/base.cjs');
require('../../../either/nullish/empty.cjs');
require('../../../either/nullish/filled.cjs');
require('../../../either/nullish/base.cjs');
require('../../../either/optional/empty.cjs');
require('../../../either/optional/filled.cjs');
require('../../../either/optional/base.cjs');
var override = require('../../../common/override.cjs');
var base = require('../../base.cjs');
var error = require('../../error.cjs');
var kind = require('../../kind.cjs');
var url = require('./checkers/url.cjs');
var email = require('./checkers/email.cjs');
var max = require('./checkers/max.cjs');
var min = require('./checkers/min.cjs');
var regex = require('./checkers/regex.cjs');

const stringKind = kind.createDataParserKind("string");
function string(definition) {
    const self = base.dataParserInit(stringKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = String(data);
            }
            catch { }
        }
        if (typeof data === "string") {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
    return string.overrideHandler.apply(self);
}
string.overrideHandler = override.createOverride("@duplojs/utils/data-parser/string");

exports.checkerUrl = url.checkerUrl;
exports.checkerUrlKind = url.checkerUrlKind;
exports.url = url.url;
exports.checkerEmail = email.checkerEmail;
exports.checkerEmailKind = email.checkerEmailKind;
exports.email = email.email;
exports.checkerStringMax = max.checkerStringMax;
exports.checkerStringMaxKind = max.checkerStringMaxKind;
exports.checkerStringMin = min.checkerStringMin;
exports.checkerStringMinKind = min.checkerStringMinKind;
exports.checkerStringRegex = regex.checkerStringRegex;
exports.checkerStringRegexKind = regex.checkerStringRegexKind;
exports.string = string;
exports.stringKind = stringKind;
