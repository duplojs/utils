'use strict';

var kind = require('../kind.cjs');
var kind$1 = require('../../common/kind.cjs');
var errorKindNamespace = require('../../common/errorKindNamespace.cjs');
var pipe = require('../../common/pipe.cjs');
var index = require('../../dataParser/parsers/string/index.cjs');
var index$1 = require('../../dataParser/parsers/number/index.cjs');
var index$2 = require('../../dataParser/parsers/bigint/index.cjs');
var boolean = require('../../dataParser/parsers/boolean.cjs');
var date = require('../../dataParser/parsers/date.cjs');
var index$3 = require('../../dataParser/parsers/time/index.cjs');
var unwrap = require('../../common/unwrap.cjs');
var is = require('../../either/right/is.cjs');
var is$1 = require('../../either/left/is.cjs');
var create = require('../../either/left/create.cjs');
var create$1 = require('../../either/right/create.cjs');
var wrapValue = require('../../common/wrapValue.cjs');
var override = require('../../common/override.cjs');

const primitiveHandlerKind = kind.createCleanKind("primitive-handler");
class CreatePrimitiveError extends kind$1.kindHeritage("create-primitive-error", errorKindNamespace.createErrorKind("create-primitive-error"), Error) {
    primitiveName;
    data;
    dataParserError;
    constructor(primitiveName, data, dataParserError) {
        super({}, [`Error when create primitive ${primitiveName}.`]);
        this.primitiveName = primitiveName;
        this.data = data;
        this.dataParserError = dataParserError;
    }
}
function createPrimitive(name, dataParser) {
    function create$2(data) {
        const result = dataParser.parse(data);
        if (is$1.isLeft(result)) {
            return create.left("createPrimitiveError", {
                primitiveName: name,
                dataParserError: unwrap.unwrap(result),
            });
        }
        else {
            return create$1.right("createPrimitive", wrapValue.wrapValue(unwrap.unwrap(result)));
        }
    }
    function createOrThrow(data) {
        const result = create$2(data);
        if (is$1.isLeft(result)) {
            const { primitiveName, dataParserError } = unwrap.unwrap(result);
            throw new CreatePrimitiveError(primitiveName, data, dataParserError);
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
        name,
        dataParser,
        create: create$2,
        createOrThrow,
        createWithLarge: create$2,
        createWithLargeOrThrow: createOrThrow,
        createWithUnknown: create$2,
        createWithUnknownOrThrow: createOrThrow,
        is: is$2,
        internal: {
            dataParser,
        },
    }, primitiveHandlerKind.setTo, createPrimitive.overrideHandler.apply);
}
createPrimitive.overrideHandler = override.createOverride("@duplojs/utils/clean/primitive");
/**
 * {@include clean/String/index.md}
 */
const String = createPrimitive("string", index.string());
/**
 * {@include clean/Number/index.md}
 */
const Number = createPrimitive("number", index$1.number());
/**
 * {@include clean/BigInt/index.md}
 */
const BigInt = createPrimitive("bigint", index$2.bigint());
/**
 * {@include clean/Boolean/index.md}
 */
const Boolean = createPrimitive("boolean", boolean.boolean());
/**
 * {@include clean/Date/index.md}
 */
const Date = createPrimitive("date", date.date());
/**
 * {@include clean/Time/index.md}
 */
const Time = createPrimitive("time", index$3.time());

exports.BigInt = BigInt;
exports.Boolean = Boolean;
exports.CreatePrimitiveError = CreatePrimitiveError;
exports.Date = Date;
exports.Number = Number;
exports.String = String;
exports.Time = Time;
exports.createPrimitive = createPrimitive;
exports.primitiveHandlerKind = primitiveHandlerKind;
