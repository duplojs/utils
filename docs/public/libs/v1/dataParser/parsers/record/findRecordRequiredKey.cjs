'use strict';

var index$1 = require('../string/index.cjs');
var index$2 = require('../number/index.cjs');
var literal = require('../literal.cjs');
var union = require('../union.cjs');
var index = require('../templateLiteral/index.cjs');
var index$3 = require('../bigint/index.cjs');
var boolean = require('../boolean.cjs');
var empty = require('../empty.cjs');
var nil = require('../nil.cjs');
var pipe = require('../../../common/pipe.cjs');
var reduce = require('../../../array/reduce.cjs');
var when = require('../../../pattern/when.cjs');
var map = require('../../../array/map.cjs');
var concat = require('../../../string/concat.cjs');
var isType = require('../../../common/isType.cjs');
var flatMap = require('../../../array/flatMap.cjs');
var prepend = require('../../../string/prepend.cjs');
var exhaustive = require('../../../pattern/exhaustive.cjs');
var innerPipe = require('../../../common/innerPipe.cjs');
var flat = require('../../../array/flat.cjs');
var justReturn = require('../../../common/justReturn.cjs');
var when$1 = require('../../../common/when.cjs');
var to = require('../../../string/to.cjs');
var or = require('../../../common/or.cjs');

function findRecordRequiredKeyOnTemplateLiteralPart(templatePart) {
    return pipe.pipe(templatePart, map.map(innerPipe.innerPipe(when.when((value) => index$1.stringKind.has(value)
        || index$2.numberKind.has(value)
        || index$3.bigIntKind.has(value), justReturn.justReturn([])), when.when(or.or([
        isType.isType("bigint"),
        isType.isType("boolean"),
        isType.isType("null"),
        isType.isType("number"),
        isType.isType("string"),
        isType.isType("undefined"),
    ]), innerPipe.innerPipe(when$1.when(isType.isType("bigint"), (value) => `${value}n`), to.to)), when.when(literal.literalKind.has, (value) => pipe.pipe(value.definition.value, map.map((element) => findRecordRequiredKeyOnTemplateLiteralPart([element])), flat.flat)), when.when(index.templateLiteralKind.has, (value) => findRecordRequiredKeyOnTemplateLiteralPart(value.definition.template)), when.when(boolean.booleanKind.has, justReturn.justReturn(["true", "false"])), when.when(empty.emptyKind.has, justReturn.justReturn("undefined")), when.when(nil.nilKind.has, justReturn.justReturn("null")), when.when(union.unionKind.has, (dataParser) => pipe.pipe(dataParser.definition.options, map.map((element) => findRecordRequiredKeyOnTemplateLiteralPart([element])), flat.flat)), exhaustive.exhaustive)), reduce.reduce(reduce.reduceFrom([""]), ({ lastValue, element, next }) => pipe.pipe(element, when.when(isType.isType("string"), (element) => next(map.map(lastValue, concat.concat(element)))), when.when(isType.isType("array"), (elements) => next(flatMap.flatMap(lastValue, (value) => map.map(elements, prepend.prepend(value))))), exhaustive.exhaustive)));
}
function findRecordRequiredKey(keyParser) {
    return pipe.pipe(keyParser, when.when((value) => index$1.stringKind.has(value) || index$2.numberKind.has(value), justReturn.justReturn([])), when.when(literal.literalKind.has, (dataParser) => dataParser.definition.value), when.when(union.unionKind.has, (dataParser) => pipe.pipe(dataParser.definition.options, map.map(findRecordRequiredKey), flat.flat)), when.when(index.templateLiteralKind.has, (dataParser) => findRecordRequiredKeyOnTemplateLiteralPart(dataParser.definition.template)), exhaustive.exhaustive);
}

exports.findRecordRequiredKey = findRecordRequiredKey;
exports.findRecordRequiredKeyOnTemplateLiteralPart = findRecordRequiredKeyOnTemplateLiteralPart;
