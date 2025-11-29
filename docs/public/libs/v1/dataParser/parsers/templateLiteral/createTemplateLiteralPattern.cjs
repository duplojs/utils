'use strict';

var escapeRegExp = require('../../../common/escapeRegExp.cjs');
var pipe = require('../../../common/pipe.cjs');
require('../../../common/stringToBytes.cjs');
require('../../../common/stringToMillisecond.cjs');
var innerPipe = require('../../../common/innerPipe.cjs');
var when$1 = require('../../../common/when.cjs');
var isType = require('../../../common/isType.cjs');
var or = require('../../../common/or.cjs');
var justReturn = require('../../../common/justReturn.cjs');
var find = require('../../../array/find.cjs');
var to = require('../../../object/to.cjs');
var map = require('../../../array/map.cjs');
var join = require('../../../array/join.cjs');
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
require('../../../common/override.cjs');
var index = require('./index.cjs');
require('../../../pattern/result.cjs');
var exhaustive = require('../../../pattern/exhaustive.cjs');
var when = require('../../../pattern/when.cjs');
var replace = require('../../../string/replace.cjs');
var index$3 = require('../number/index.cjs');
var index$2 = require('../bigint/index.cjs');
var boolean = require('../boolean.cjs');
var nil = require('../nil.cjs');
var empty = require('../empty.cjs');
var literal = require('../literal.cjs');
var index$1 = require('../string/index.cjs');
var union = require('../union.cjs');
var regex = require('../string/checkers/regex.cjs');
var max = require('../string/checkers/max.cjs');
var min = require('../string/checkers/min.cjs');
var email = require('../string/checkers/email.cjs');
var int = require('../number/checkers/int.cjs');

function createTemplateLiteralPattern(templatePart) {
    return pipe.pipe(templatePart, map.map(innerPipe.innerPipe(when.when(or.or([
        isType.isType("string"),
        isType.isType("boolean"),
        isType.isType("bigint"),
        isType.isType("null"),
        isType.isType("undefined"),
        isType.isType("number"),
    ]), innerPipe.innerPipe(when$1.when(isType.isType("bigint"), (value) => `${value}n`), String, escapeRegExp.escapeRegExp, (value) => `(?:${value})`)), when.when(index$3.numberKind.has, (dataParser) => pipe.pipe(dataParser.definition.checkers, to.to({
        int: innerPipe.innerPipe(find.find(int.checkerIntKind.has), when$1.when(int.checkerIntKind.has, justReturn.justReturn(true))),
    }), ({ int }) => {
        if (int) {
            return "(?:[0-9]+)";
        }
        return "(?:[0-9]+(\\.[0-9]+)?)";
    })), when.when(index$2.bigIntKind.has, () => "(?:[0-9]+n)"), when.when(boolean.booleanKind.has, () => "(?:true|false)"), when.when(nil.nilKind.has, () => "(?:null)"), when.when(empty.emptyKind.has, () => "(?:undefined)"), when.when(literal.literalKind.has, (dataParser) => pipe.pipe(dataParser.definition.value, map.map((element) => createTemplateLiteralPattern([element])), join.join("|"), (pattern) => `(?:${pattern})`)), when.when(index$1.stringKind.has, (dataParser) => pipe.pipe(dataParser.definition.checkers, to.to({
        email: innerPipe.innerPipe(find.find(email.checkerEmailKind.has), when$1.when(email.checkerEmailKind.has, (checker) => pipe.pipe(checker.definition.pattern.source, replace.replace(/^\^/, ""), replace.replace(/\$$/, "")))),
        min: innerPipe.innerPipe(find.find(min.checkerStringMinKind.has), when$1.when(min.checkerStringMinKind.has, (checker) => checker.definition.min)),
        max: innerPipe.innerPipe(find.find(max.checkerStringMaxKind.has), when$1.when(max.checkerStringMaxKind.has, (checker) => checker.definition.max)),
        regex: innerPipe.innerPipe(find.find(regex.checkerStringRegexKind.has), when$1.when(regex.checkerStringRegexKind.has, (checker) => pipe.pipe(checker.definition.regex.source, replace.replace(/^\^/, ""), replace.replace(/\$$/, "")))),
    }), ({ email, regex, max, min }) => {
        if (email) {
            return email;
        }
        else if (regex) {
            return regex;
        }
        else if (max !== undefined && min !== undefined) {
            return `(?:[^]{${min},${max}})`;
        }
        else if (max !== undefined) {
            return `(?:[^]{0,${max}})`;
        }
        else if (min !== undefined) {
            return `(?:[^]{${min},})`;
        }
        return "(?:[^]*)";
    })), innerPipe.innerPipe(when.when(index.templateLiteralKind.has, (dataParser) => pipe.pipe(dataParser.definition.pattern.source, replace.replace(/^\^/, ""), replace.replace(/\$$/, ""), (pattern) => `(?:${pattern})`)), when.when(union.unionKind.has, (dataParser) => pipe.pipe(dataParser.definition.options, map.map((option) => createTemplateLiteralPattern([option])), join.join("|"), (pattern) => `(?:${pattern})`)), exhaustive.exhaustive))), join.join(""));
}

exports.createTemplateLiteralPattern = createTemplateLiteralPattern;
