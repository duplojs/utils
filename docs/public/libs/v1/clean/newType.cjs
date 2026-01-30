'use strict';

var kind = require('./kind.cjs');
var kind$1 = require('../common/kind.cjs');
var flatMap = require('../array/flatMap.cjs');
var coalescing = require('../array/coalescing.cjs');
var pipe = require('../common/pipe.cjs');
var map = require('../array/map.cjs');
var entry = require('../object/entry.cjs');
var errorKindNamespace = require('../common/errorKindNamespace.cjs');
var is = require('../either/left/is.cjs');
var unwrap = require('../common/unwrap.cjs');
var create = require('../either/left/create.cjs');
var base = require('./constraint/base.cjs');
var create$1 = require('../either/right/create.cjs');
var wrapValue = require('../common/wrapValue.cjs');
var fromEntries = require('../object/fromEntries.cjs');

const newTypeKind = kind.createCleanKind("new-type");
const newTypeHandlerKind = kind.createCleanKind("new-type-handler");
class CreateNewTypeError extends kind$1.kindHeritage("create-new-type-error", errorKindNamespace.createErrorKind("create-new-type-error"), Error) {
    newTypeName;
    data;
    dataParserError;
    constructor(newTypeName, data, dataParserError) {
        super({}, [`Error when create new type ${newTypeName}.`]);
        this.newTypeName = newTypeName;
        this.data = data;
        this.dataParserError = dataParserError;
    }
}
/**
 * {@include clean/createNewType/index.md}
 */
function createNewType(name, dataParser, constraint) {
    const constraints = coalescing.coalescing(constraint ?? []);
    const checkers = flatMap.flatMap(constraints, ({ checkers }) => checkers);
    const dataParserWithCheckers = constraint
        ? dataParser.addChecker(...checkers)
        : dataParser;
    const constraintKindValue = pipe.pipe(constraints, map.map(({ name }) => entry.entry(name, null)), fromEntries.fromEntries);
    const wrappedConstraints = pipe.pipe(constraints, map.map((constrain) => entry.entry(constrain.name, constrain)), fromEntries.fromEntries);
    function getConstraint(name) {
        return wrappedConstraints[name];
    }
    function create$2(data) {
        const result = dataParserWithCheckers.parse(unwrap.unwrap(data));
        if (is.isLeft(result)) {
            return create.left("createNewTypeError", unwrap.unwrap(result));
        }
        else if (base.constrainedTypeKind.has(data)) {
            return create$1.right("createNewType", newTypeKind.setTo(base.constrainedTypeKind.addTo(data, {
                ...base.constrainedTypeKind.getValue(data),
                ...constraintKindValue,
            }), name));
        }
        else {
            return create$1.right("createNewType", newTypeKind.setTo(base.constrainedTypeKind.setTo(wrapValue.wrapValue(unwrap.unwrap(result)), constraintKindValue), name));
        }
    }
    function createOrThrow(data) {
        const result = create$2(data);
        if (is.isLeft(result)) {
            throw new CreateNewTypeError(name, data, unwrap.unwrap(result));
        }
        else {
            return unwrap.unwrap(result);
        }
    }
    function is$1(input) {
        if (!newTypeKind.has(input)
            || newTypeKind.getValue(input) !== name) {
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
    return newTypeHandlerKind.setTo({
        name,
        dataParser: dataParserWithCheckers,
        constrains: constraints,
        getConstraint,
        create: create$2,
        createOrThrow,
        createWithUnknown: create$2,
        createWithUnknownOrThrow: createOrThrow,
        is: is$1,
    });
}

exports.CreateNewTypeError = CreateNewTypeError;
exports.createNewType = createNewType;
exports.newTypeHandlerKind = newTypeHandlerKind;
exports.newTypeKind = newTypeKind;
