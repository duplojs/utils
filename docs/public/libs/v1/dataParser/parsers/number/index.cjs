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
var int = require('./checkers/int.cjs');
var min = require('./checkers/min.cjs');
var max = require('./checkers/max.cjs');

const numberKind = kind.createDataParserKind("number");
function number(definition) {
    const self = base.dataParserInit(numberKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            coerce: definition?.coerce ?? false,
        },
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = Number(data);
            }
            catch { }
        }
        if (typeof data === "number" && !Number.isNaN(data)) {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
    return number.overrideHandler.apply(self);
}
number.overrideHandler = override.createOverride("@duplojs/utils/data-parser/number");

exports.checkerInt = int.checkerInt;
exports.checkerIntKind = int.checkerIntKind;
exports.int = int.int;
exports.checkerNumberMin = min.checkerNumberMin;
exports.checkerNumberMinKind = min.checkerNumberMinKind;
exports.checkerNumberMax = max.checkerNumberMax;
exports.checkerNumberMaxKind = max.checkerNumberMaxKind;
exports.number = number;
exports.numberKind = numberKind;
