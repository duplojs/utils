'use strict';

var kind = require('../kind.cjs');
var base = require('./base.cjs');
var kind$1 = require('../../common/kind.cjs');
var flatMap = require('../../array/flatMap.cjs');
var coalescing = require('../../array/coalescing.cjs');
var pipe = require('../../common/pipe.cjs');
var map = require('../../array/map.cjs');
var entry = require('../../object/entry.cjs');
var errorKindNamespace = require('../../common/errorKindNamespace.cjs');
var is = require('../../either/left/is.cjs');
var unwrap = require('../../common/unwrap.cjs');
var create = require('../../either/left/create.cjs');
var create$1 = require('../../either/right/create.cjs');
var wrapValue = require('../../common/wrapValue.cjs');
var fromEntries = require('../../object/fromEntries.cjs');

const constraintsSetHandlerKind = kind.createCleanKind("constraints-set-handler");
class CreateConstraintsSetError extends kind$1.kindHeritage("create-constraint-set-error", errorKindNamespace.createErrorKind("create-constraint-set-error"), Error) {
    data;
    dataParserError;
    constructor(data, dataParserError) {
        super({}, ["Error when create constrained type with set."]);
        this.data = data;
        this.dataParserError = dataParserError;
    }
}
/**
 * {@include clean/createConstraintsSet/index.md}
 */
function createConstraintsSet(primitiveHandler, constraint) {
    const constraints = coalescing.coalescing(constraint);
    const checkers = flatMap.flatMap(constraints, ({ checkers }) => checkers);
    const dataParserWithCheckers = primitiveHandler
        .dataParser
        .addChecker(...checkers);
    const constraintKindValue = pipe.pipe(constraints, map.map(({ name }) => entry.entry(name, null)), fromEntries.fromEntries);
    const wrappedConstraints = pipe.pipe(constraints, map.map((constrain) => entry.entry(constrain.name, constrain)), fromEntries.fromEntries);
    function getConstraint(name) {
        return wrappedConstraints[name];
    }
    function create$2(data) {
        const result = dataParserWithCheckers.parse(unwrap.unwrap(data));
        if (is.isLeft(result)) {
            return create.left("createConstraintsSetError", unwrap.unwrap(result));
        }
        else if (base.constrainedTypeKind.has(data)) {
            return create$1.right("createConstraintsSet", base.constrainedTypeKind.addTo(data, {
                ...base.constrainedTypeKind.getValue(data),
                ...constraintKindValue,
            }));
        }
        else {
            return create$1.right("createConstraintsSet", base.constrainedTypeKind.setTo(wrapValue.wrapValue(unwrap.unwrap(result)), constraintKindValue));
        }
    }
    function createOrThrow(data) {
        const result = create$2(data);
        if (is.isLeft(result)) {
            throw new CreateConstraintsSetError(data, unwrap.unwrap(result));
        }
        else {
            return unwrap.unwrap(result);
        }
    }
    function is$1(input) {
        if (!base.constrainedTypeKind.has(input)) {
            return false;
        }
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let index = 0; index < constraints.length; index++) {
            if (!constraints[index].is(input)) {
                return false;
            }
        }
        return true;
    }
    return constraintsSetHandlerKind.setTo({
        primitiveHandler,
        constrains: constraints,
        getConstraint,
        create: create$2,
        createOrThrow,
        createWithUnknown: create$2,
        createWithUnknownOrThrow: createOrThrow,
        is: is$1,
    });
}

exports.CreateConstraintsSetError = CreateConstraintsSetError;
exports.constraintsSetHandlerKind = constraintsSetHandlerKind;
exports.createConstraintsSet = createConstraintsSet;
