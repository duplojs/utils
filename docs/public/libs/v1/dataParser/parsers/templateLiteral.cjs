'use strict';

var escapeRegExp = require('../../common/escapeRegExp.cjs');
var kind = require('../../common/kind.cjs');
var pipe = require('../../common/pipe.cjs');
var innerPipe = require('../../common/innerPipe.cjs');
var when$1 = require('../../common/when.cjs');
var isType = require('../../common/isType.cjs');
var whenElse = require('../../common/whenElse.cjs');
var map = require('../../array/map.cjs');
var join = require('../../array/join.cjs');
var base = require('../base.cjs');
var error = require('../error.cjs');
require('../../pattern/result.cjs');
var exhaustive = require('../../pattern/exhaustive.cjs');
var when = require('../../pattern/when.cjs');
var replace = require('../../string/replace.cjs');
var index = require('./string/index.cjs');
var index$2 = require('./number/index.cjs');
var index$1 = require('./bigint/index.cjs');
var literal = require('./literal.cjs');
var empty = require('./empty.cjs');
var nil = require('./nil.cjs');
var boolean = require('./boolean.cjs');

const dataParserTemplateLiteralKind = kind.createKind("data-parser-template-literal");
function templateLiteral(template, definition) {
    const pattern = pipe.pipe(template, map.map(innerPipe.innerPipe(when.when(isType.isType("string"), (value) => `(?:${escapeRegExp.escapeRegExp(value)})`), when.when(index$2.dataParserNumberKind.has, () => "(:?[0-9]+)"), when.when(index$1.dataParserBigIntKind.has, () => "(?:[0-9]+n)"), when.when(boolean.dataParserBooleanKind.has, () => "(?:true|false)"), when.when(nil.dataParserNilKind.has, () => "(?:null)"), when.when(empty.dataParserEmptyKind.has, () => "(?:undefined)"), when.when(literal.dataParserLiteralKind.has, (dataParser) => pipe.pipe(dataParser.definition.value, map.map(innerPipe.innerPipe(when$1.when(isType.isType("bigint"), (value) => `${value}n`), String, escapeRegExp.escapeRegExp)), join.join("|"), (pattern) => `(?:${pattern})`)), when.when(index.dataParserStringKind.has, innerPipe.innerPipe(whenElse.whenElse((dataParser) => !!dataParser.definition.checkers.length, (dataParser) => pipe.pipe(dataParser.definition.checkers, map.map((element) => pipe.pipe(element.definition.pattern.source, replace.replace(/^\^/, ""), replace.replace(/\$$/, ""))), join.join("")), () => "(?:[^]*)"))), when.when(dataParserTemplateLiteralKind.has, (dataParser) => pipe.pipe(dataParser.definition.pattern.source, replace.replace(/^\^/, ""), replace.replace(/\$$/, ""), (pattern) => `(?:${pattern})`)), exhaustive.exhaustive)), join.join(""), (pattern) => new RegExp(`^${pattern}$`));
    return base.dataParserInit(dataParserTemplateLiteralKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            template,
            pattern,
        },
    }, (data, _error, self) => {
        if (typeof data === "string" && self.definition.pattern.test(data)) {
            return data;
        }
        return error.SymbolDataParserErrorIssue;
    });
}

exports.dataParserTemplateLiteralKind = dataParserTemplateLiteralKind;
exports.templateLiteral = templateLiteral;
