'use strict';

var kind = require('../kind.cjs');
var kind$1 = require('../../common/kind.cjs');
var index = require('../../dataParser/parsers/string/index.cjs');
var pipe = require('../../common/pipe.cjs');
var index$1 = require('../../dataParser/parsers/number/index.cjs');
var index$2 = require('../../dataParser/parsers/bigint/index.cjs');
var boolean = require('../../dataParser/parsers/boolean.cjs');
var date = require('../../dataParser/parsers/date.cjs');
var index$3 = require('../../dataParser/parsers/time/index.cjs');
var errorKindNamespace = require('../../common/errorKindNamespace.cjs');
var override = require('../../common/override.cjs');
var unwrap = require('../../common/unwrap.cjs');
var is = require('../../either/right/is.cjs');
var is$1 = require('../../either/left/is.cjs');
var create = require('../../either/left/create.cjs');
var create$1 = require('../../either/right/create.cjs');
var wrapValue = require('../../common/wrapValue.cjs');

const primitiveHandlerKind = kind.createCleanKind("primitive-handler");
class CreatePrimitiveError extends kind$1.kindHeritage("create-primitive-error", errorKindNamespace.createErrorKind("create-primitive-error"), Error) {
    data;
    dataParserError;
    constructor(data, dataParserError) {
        super({}, ["Error when create primitive."]);
        this.data = data;
        this.dataParserError = dataParserError;
    }
}
function createPrimitive(dataParser) {
    function create$2(data) {
        const result = dataParser.parse(data);
        if (is$1.isLeft(result)) {
            return create.left("createPrimitiveError", unwrap.unwrap(result));
        }
        else {
            return create$1.right("createPrimitive", wrapValue.wrapValue(unwrap.unwrap(result)));
        }
    }
    function createOrThrow(data) {
        const result = create$2(data);
        if (is$1.isLeft(result)) {
            throw new CreatePrimitiveError(data, unwrap.unwrap(result));
        }
        else {
            return unwrap.unwrap(result);
        }
    }
    function is$2(input) {
        const result = dataParser.parse(unwrap.unwrap(input));
        return is.isRight(result);
    }
    return pipe.pipe({
        dataParser,
        create: create$2,
        createOrThrow,
        createWithUnknown: create$2,
        createWithUnknownOrThrow: createOrThrow,
        is: is$2,
    }, primitiveHandlerKind.setTo, createPrimitive.overrideHandler.apply);
}
createPrimitive.overrideHandler = override.createOverride("@duplojs/utils/clean/primitive");
/**
 * {@include clean/String/index.md}
 */
const String = createPrimitive(index.string());
/**
 * {@include clean/Number/index.md}
 */
const Number = createPrimitive(index$1.number());
/**
 * {@include clean/BigInt/index.md}
 */
const BigInt = createPrimitive(index$2.bigint());
/**
 * {@include clean/Boolean/index.md}
 */
const Boolean = createPrimitive(boolean.boolean());
/**
 * {@include clean/Date/index.md}
 */
const Date = createPrimitive(date.date());
/**
 * {@include clean/Time/index.md}
 */
const Time = createPrimitive(index$3.time());

exports.BigInt = BigInt;
exports.Boolean = Boolean;
exports.CreatePrimitiveError = CreatePrimitiveError;
exports.Date = Date;
exports.Number = Number;
exports.String = String;
exports.Time = Time;
exports.primitiveHandlerKind = primitiveHandlerKind;
