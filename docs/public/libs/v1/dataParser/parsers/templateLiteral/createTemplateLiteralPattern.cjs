'use strict';

var index = require('./index.cjs');
var index$3 = require('../number/index.cjs');
var index$2 = require('../bigint/index.cjs');
var boolean = require('../boolean.cjs');
var nil = require('../nil.cjs');
var empty = require('../empty.cjs');
var literal = require('../literal.cjs');
var index$1 = require('../string/index.cjs');
var union = require('../union.cjs');
var innerPipe = require('../../../common/innerPipe.cjs');
var escapeRegExp = require('../../../common/escapeRegExp.cjs');
var or = require('../../../common/or.cjs');
var pipe = require('../../../common/pipe.cjs');
var join = require('../../../array/join.cjs');
var map = require('../../../array/map.cjs');
var when = require('../../../pattern/when.cjs');
var replace = require('../../../string/replace.cjs');
var exhaustive = require('../../../pattern/exhaustive.cjs');
var when$1 = require('../../../common/when.cjs');
var isType = require('../../../common/isType.cjs');

const decimalNumberPattern = "[+-]?(?:(?:[0-9]+(?:\\.[0-9]*)?)|(?:\\.[0-9]+))(?:[eE][+-]?[0-9]+)?";
const numericBasePattern = "0(?:[xX][0-9a-fA-F]+|[bB][01]+|[oO][0-7]+)";
const numberPattern = `(?:${decimalNumberPattern})|(?:${numericBasePattern})`;
const bigintPattern = `(?:-?${numericBasePattern})|(?:-?(?:0|[1-9][0-9]*))`;
function createTemplateLiteralPattern(templatePart) {
    return pipe.pipe(templatePart, map.map(innerPipe.innerPipe(when.when(or.or([
        isType.isType("bigint"),
        isType.isType("boolean"),
        isType.isType("null"),
        isType.isType("number"),
        isType.isType("string"),
        isType.isType("undefined"),
    ]), (value) => {
        if (typeof value === "number" && !Number.isFinite(value)) {
            return `(?:${numberPattern})`;
        }
        return pipe.pipe(value, when$1.when(isType.isType("bigint"), (value) => `${value}n`), String, escapeRegExp.escapeRegExp, (value) => `(?:${value})`);
    }), when.when(index$3.numberKind.has, () => `(?:${numberPattern})`), when.when(index$2.bigIntKind.has, () => `(?:(?:${bigintPattern})n)`), when.when(boolean.booleanKind.has, () => "(?:true|false)"), when.when(nil.nilKind.has, () => "(?:null)"), when.when(empty.emptyKind.has, () => "(?:undefined)"), when.when(literal.literalKind.has, (dataParser) => pipe.pipe(dataParser.definition.value, map.map((element) => createTemplateLiteralPattern([element])), join.join("|"), (pattern) => `(?:${pattern})`)), when.when(index$1.stringKind.has, () => "(?:[^]*)"), innerPipe.innerPipe(when.when(index.templateLiteralKind.has, (dataParser) => pipe.pipe(dataParser.definition.pattern.source, replace.replace(/^\^/, ""), replace.replace(/\$$/, ""), (pattern) => `(?:${pattern})`)), when.when(union.unionKind.has, (dataParser) => pipe.pipe(dataParser.definition.options, map.map((option) => createTemplateLiteralPattern([option])), join.join("|"), (pattern) => `(?:${pattern})`)), exhaustive.exhaustive))), join.join(""));
}

exports.createTemplateLiteralPattern = createTemplateLiteralPattern;
