'use strict';

var newType = require('./newType.cjs');
var base = require('./primitive/base.cjs');
var base$1 = require('./constraint/base.cjs');
var set = require('./constraint/set.cjs');
var hasSomeKinds = require('../common/hasSomeKinds.cjs');
var index = require('../pattern/match/index.cjs');
var transform = require('../dataParser/parsers/transform.cjs');
var index$1 = require('../dataParser/parsers/string/index.cjs');
var index$2 = require('../dataParser/parsers/number/index.cjs');
var index$3 = require('../dataParser/parsers/bigint/index.cjs');
var boolean = require('../dataParser/parsers/boolean.cjs');
var date = require('../dataParser/parsers/date.cjs');
var index$4 = require('../dataParser/parsers/time/index.cjs');
var empty = require('../dataParser/parsers/empty.cjs');
var nil = require('../dataParser/parsers/nil.cjs');
var wrapValue = require('../common/wrapValue.cjs');

function toMapDataParser(input, params) {
    const dataParser = (base.primitiveHandlerKind.has(input)
        ? input.dataParser.clone()
        : input.internal.dataParser.clone());
    if (params?.coerce
        && hasSomeKinds.hasSomeKinds(dataParser, [
            index$1.stringKind,
            index$2.numberKind,
            index$3.bigIntKind,
            index$3.bigIntKind,
            boolean.booleanKind,
            date.dateKind,
            index$4.timeKind,
            empty.emptyKind,
            nil.nilKind,
        ])) {
        dataParser.definition.coerce = true;
    }
    const valueContainer = index.match(input)
        .when(newType.newTypeHandlerKind.has, (newType$1) => ({
        ...newType.newTypeKind.setTo({}, newType$1.name),
        ...base$1.constrainedTypeKind.setTo({}, newType$1.internal.constraintKindValue),
    }))
        .when(hasSomeKinds.hasSomeKinds([base$1.constraintHandlerKind, set.constraintsSetHandlerKind]), (constraintOrSet) => base$1.constrainedTypeKind.setTo({}, constraintOrSet.internal.constraintKindValue))
        .when(base.primitiveHandlerKind.has, () => ({}))
        .exhaustive();
    return transform.transform(dataParser, (value) => ({
        ...valueContainer,
        [wrapValue.keyWrappedValue]: value,
    }));
}

exports.toMapDataParser = toMapDataParser;
