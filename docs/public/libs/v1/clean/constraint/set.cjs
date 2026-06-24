'use strict';

var kind = require('../kind.cjs');
var base = require('./base.cjs');
var kind$1 = require('../../common/kind.cjs');
var errorKindNamespace = require('../../common/errorKindNamespace.cjs');
var flatMap = require('../../array/flatMap.cjs');
var coalescing = require('../../array/coalescing.cjs');
var reduce = require('../../array/reduce.cjs');
var map = require('../../array/map.cjs');
var pipe = require('../../common/pipe.cjs');
var fromEntries = require('../../object/fromEntries.cjs');
var entry = require('../../object/entry.cjs');
var is = require('../../either/left/is.cjs');
var unwrap = require('../../common/unwrap.cjs');
var first = require('../../array/at/first.cjs');
var baseChecker = require('../../dataParser/baseChecker.cjs');
var create = require('../../either/left/create.cjs');
var create$1 = require('../../either/right/create.cjs');
var wrapValue = require('../../common/wrapValue.cjs');
var override = require('../../common/override.cjs');

const constraintsSetHandlerKind = kind.createCleanKind("constraints-set-handler");
class CreateConstraintsSetError extends kind$1.kindHeritage("create-constraint-set-error", errorKindNamespace.createErrorKind("create-constraint-set-error"), Error) {
    constraintName;
    data;
    dataParserError;
    constructor(constraintName, data, dataParserError) {
        super({}, [`Error when create constrained type ${constraintName} with set.`]);
        this.constraintName = constraintName;
        this.data = data;
        this.dataParserError = dataParserError;
    }
}
/**
 * {@include clean/createConstraintsSet/index.md}
 */
function createConstraintsSet(primitiveHandler, constraint) {
    const constraints = flatMap.flatMap(coalescing.coalescing(constraint), (constraint) => constraintsSetHandlerKind.has(constraint)
        ? constraint.internal.constraints
        : constraint);
    const sourceMapper = reduce.reduce(constraints, reduce.reduceFrom(new Map()), ({ element: constraint, next, lastValue: mapper }) => {
        void map.map(constraint.internal.checkers, (checker) => mapper.set(checker, constraint));
        return next(mapper);
    });
    const checkers = flatMap.flatMap(constraints, ({ internal }) => internal.checkers);
    const dataParserWithCheckers = primitiveHandler
        .internal
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
            const dataParserError = unwrap.unwrap(result);
            const source = first.first(dataParserError.issues)?.getSource();
            const constrainedSource = (baseChecker.checkerKind.has(source)
                && sourceMapper.get(source)) || first.first(constraints);
            return create.left("createConstraintsSetError", {
                constraintName: constrainedSource.name,
                dataParserError,
            });
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
            const errorContent = unwrap.unwrap(result);
            throw new CreateConstraintsSetError(errorContent.constraintName, data, errorContent.dataParserError);
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
    return pipe.pipe({
        primitiveHandler,
        constraints,
        internal: {
            primitiveHandler,
            constraints,
            constraintKindValue,
            dataParser: dataParserWithCheckers,
        },
        getConstraint,
        create: create$2,
        createOrThrow,
        createWithUnknown: create$2,
        createWithUnknownOrThrow: createOrThrow,
        is: is$1,
    }, constraintsSetHandlerKind.setTo, createConstraintsSet.overrideHandler.apply);
}
createConstraintsSet.overrideHandler = override.createOverride("@duplojs/utils/clean/constraints-set");

exports.CreateConstraintsSetError = CreateConstraintsSetError;
exports.constraintsSetHandlerKind = constraintsSetHandlerKind;
exports.createConstraintsSet = createConstraintsSet;
