'use strict';

var kind = require('../kind.cjs');
var kind$1 = require('../../common/kind.cjs');
var coalescing = require('../../array/coalescing.cjs');
var pipe = require('../../common/pipe.cjs');
var errorKindNamespace = require('../../common/errorKindNamespace.cjs');
var override = require('../../common/override.cjs');
var is = require('../../either/left/is.cjs');
var unwrap = require('../../common/unwrap.cjs');
var create = require('../../either/left/create.cjs');
var create$1 = require('../../either/right/create.cjs');
var wrapValue = require('../../common/wrapValue.cjs');

const constrainedTypeKind = kind.createCleanKind("constrained-type");
const constraintHandlerKind = kind.createCleanKind("constraint-handler");
class CreateConstrainedTypeError extends kind$1.kindHeritage("create-constrained-type-error", errorKindNamespace.createErrorKind("create-constrained-type-error"), Error) {
    constrainedTypeName;
    data;
    dataParserError;
    constructor(constrainedTypeName, data, dataParserError) {
        super({}, [`Error when create constrained type ${constrainedTypeName}.`]);
        this.constrainedTypeName = constrainedTypeName;
        this.data = data;
        this.dataParserError = dataParserError;
    }
}
/**
 * {@include clean/createConstraint/index.md}
 */
function createConstraint(name, primitiveHandler, checker) {
    const checkers = coalescing.coalescing(checker);
    const dataParserWithCheckers = primitiveHandler
        .dataParser
        .addChecker(...checkers);
    function create$2(data) {
        const result = dataParserWithCheckers.parse(unwrap.unwrap(data));
        if (is.isLeft(result)) {
            return create.left("createConstrainedTypeError", unwrap.unwrap(result));
        }
        else if (constrainedTypeKind.has(data)) {
            return create$1.right("createConstrainedType", constrainedTypeKind.addTo(data, {
                ...constrainedTypeKind.getValue(data),
                [name]: null,
            }));
        }
        else {
            return create$1.right("createConstrainedType", constrainedTypeKind.setTo(wrapValue.wrapValue(unwrap.unwrap(result)), { [name]: null }));
        }
    }
    function createOrThrow(data) {
        const result = create$2(data);
        if (is.isLeft(result)) {
            throw new CreateConstrainedTypeError(name, data, unwrap.unwrap(result));
        }
        else {
            return unwrap.unwrap(result);
        }
    }
    function is$1(input) {
        if (constrainedTypeKind.has(input)
            && constrainedTypeKind.getValue(input)[name] === null) {
            return true;
        }
        return false;
    }
    return pipe.pipe({
        name,
        primitiveHandler,
        checkers,
        create: create$2,
        createOrThrow,
        createWithUnknown: create$2,
        createWithUnknownOrThrow: createOrThrow,
        is: is$1,
    }, constraintHandlerKind.setTo, createConstraint.overrideHandler.apply);
}
createConstraint.overrideHandler = override.createOverride("@duplojs/utils/clean/constraint");

exports.CreateConstrainedTypeError = CreateConstrainedTypeError;
exports.constrainedTypeKind = constrainedTypeKind;
exports.constraintHandlerKind = constraintHandlerKind;
exports.createConstraint = createConstraint;
