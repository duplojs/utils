'use strict';

var entries = require('../../object/entries.cjs');
var pipe = require('../../common/pipe.cjs');
require('../../common/stringToBytes.cjs');
require('../../common/stringToMillisecond.cjs');
var filter = require('../../array/filter.cjs');
var fromEntries = require('../../object/fromEntries.cjs');
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
require('../parsers/string/index.cjs');
var index = require('../parsers/object/index.cjs');
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
var isKeyof = require('../../string/isKeyof.cjs');

function object(shape, definition) {
    const self = baseExtended.dataParserExtendedInit(index.object(shape, definition), {
        omit: (self, omitObject, definition) => {
            const newShape = pipe.pipe(self.definition.shape, entries.entries, filter.filter(([key]) => !isKeyof.isKeyof(key, omitObject)), fromEntries.fromEntries);
            return object(newShape, definition);
        },
        pick: (self, omitObject, definition) => {
            const newShape = pipe.pipe(self.definition.shape, entries.entries, filter.filter(([key]) => isKeyof.isKeyof(key, omitObject)), fromEntries.fromEntries);
            return object(newShape, definition);
        },
    });
    return object.overrideHandler.apply(self);
}
object.overrideHandler = override.createOverride("@duplojs/utils/data-parser-extended/object");

exports.object = object;
