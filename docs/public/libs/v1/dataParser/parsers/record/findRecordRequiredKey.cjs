'use strict';

var pipe = require('../../../common/pipe.cjs');
require('../../../common/stringToBytes.cjs');
require('../../../common/stringToMillisecond.cjs');
var innerPipe = require('../../../common/innerPipe.cjs');
var when$1 = require('../../../common/when.cjs');
var isType = require('../../../common/isType.cjs');
var or = require('../../../common/or.cjs');
var justReturn = require('../../../common/justReturn.cjs');
var filter = require('../../../array/filter.cjs');
var reduce = require('../../../array/reduce.cjs');
var includes = require('../../../array/includes.cjs');
var map = require('../../../array/map.cjs');
var flat = require('../../../array/flat.cjs');
var flatMap = require('../../../array/flatMap.cjs');
var notIncludes = require('../../../array/notIncludes.cjs');
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
require('../../../pattern/result.cjs');
var exhaustive = require('../../../pattern/exhaustive.cjs');
var otherwise = require('../../../pattern/otherwise.cjs');
var when = require('../../../pattern/when.cjs');
var concat = require('../../../string/concat.cjs');
var index$1 = require('../string/index.cjs');
var index$2 = require('../number/index.cjs');
var literal = require('../literal.cjs');
var union = require('../union.cjs');
var index = require('../templateLiteral/index.cjs');
var index$3 = require('../bigint/index.cjs');
var boolean = require('../boolean.cjs');
var empty = require('../empty.cjs');
var nil = require('../nil.cjs');

function findRecordRequiredKeyOnTemplateLiteralPart(templatePart) {
    return pipe.pipe(templatePart, map.map(innerPipe.innerPipe(when.when((value) => index$1.stringKind.has(value)
        || index$2.numberKind.has(value)
        || index$3.bigIntKind.has(value), justReturn.justReturn(null)), when.when(or.or([
        isType.isType("bigint"),
        isType.isType("boolean"),
        isType.isType("null"),
        isType.isType("number"),
        isType.isType("string"),
        isType.isType("undefined"),
    ]), innerPipe.innerPipe(when$1.when(isType.isType("bigint"), (value) => `${value}n`), String)), when.when(literal.literalKind.has, (value) => findRecordRequiredKey(value)), when.when(index.templateLiteralKind.has, (value) => findRecordRequiredKeyOnTemplateLiteralPart(value.definition.template)), when.when(boolean.booleanKind.has, justReturn.justReturn(["true", "false"])), when.when(empty.emptyKind.has, justReturn.justReturn("undefined")), when.when(nil.nilKind.has, justReturn.justReturn("null")), when.when(union.unionKind.has, (dataParser) => pipe.pipe(dataParser.definition.options, map.map((element) => findRecordRequiredKeyOnTemplateLiteralPart([element])), when.when(notIncludes.notIncludes(null), flat.flat), otherwise.otherwise(justReturn.justReturn(null)))), exhaustive.exhaustive)), reduce.reduce(reduce.reduceFrom([""]), ({ lastValue, element, exit, next }) => pipe.pipe(element, when.when(isType.isType("null"), justReturn.justReturn(exit(null))), when.when(isType.isType("string"), (element) => next(map.map(lastValue, (value) => concat.concat(value, element)))), when.when(isType.isType("array"), (elements) => next(flatMap.flatMap(lastValue, (value) => map.map(elements, (subValue) => concat.concat(value, subValue))))), exhaustive.exhaustive)));
}
function findRecordRequiredKey(keyParser) {
    return pipe.pipe(keyParser, when.when((value) => index$1.stringKind.has(value) || index$2.numberKind.has(value), justReturn.justReturn(null)), when.when(literal.literalKind.has, (dataParser) => pipe.pipe(dataParser.definition.value, map.map(innerPipe.innerPipe(when$1.when(isType.isType("bigint"), (value) => `${value}n`), String)))), when.when(union.unionKind.has, (dataParser) => pipe.pipe(dataParser.definition.options, map.map(findRecordRequiredKey), when.when(includes.includes(null), justReturn.justReturn(null)), otherwise.otherwise(innerPipe.innerPipe(filter.filter(isType.isType("array")), flat.flat)))), when.when(index.templateLiteralKind.has, (dataParser) => findRecordRequiredKeyOnTemplateLiteralPart(dataParser.definition.template)), exhaustive.exhaustive);
}

exports.findRecordRequiredKey = findRecordRequiredKey;
exports.findRecordRequiredKeyOnTemplateLiteralPart = findRecordRequiredKeyOnTemplateLiteralPart;
