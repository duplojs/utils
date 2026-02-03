import { createCleanKind } from './kind.mjs';
import { kindHeritage } from '../common/kind.mjs';
import { flatMap } from '../array/flatMap.mjs';
import { coalescing } from '../array/coalescing.mjs';
import { pipe } from '../common/pipe.mjs';
import { map } from '../array/map.mjs';
import { entry } from '../object/entry.mjs';
import { createErrorKind } from '../common/errorKindNamespace.mjs';
import { fromEntries } from '../object/fromEntries.mjs';
import { createOverride } from '../common/override.mjs';
import { isLeft } from '../either/left/is.mjs';
import { unwrap } from '../common/unwrap.mjs';
import { left } from '../either/left/create.mjs';
import { constrainedTypeKind } from './constraint/base.mjs';
import { right } from '../either/right/create.mjs';
import { wrapValue } from '../common/wrapValue.mjs';

const newTypeKind = createCleanKind("new-type");
const newTypeHandlerKind = createCleanKind("new-type-handler");
class CreateNewTypeError extends kindHeritage("create-new-type-error", createErrorKind("create-new-type-error"), Error) {
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
    const constraints = coalescing(constraint ?? []);
    const checkers = flatMap(constraints, ({ checkers }) => checkers);
    const dataParserWithCheckers = constraint
        ? dataParser.addChecker(...checkers)
        : dataParser;
    const constraintKindValue = pipe(constraints, map(({ name }) => entry(name, null)), fromEntries);
    const wrappedConstraints = pipe(constraints, map((constrain) => entry(constrain.name, constrain)), fromEntries);
    function getConstraint(name) {
        return wrappedConstraints[name];
    }
    function create(data) {
        const result = dataParserWithCheckers.parse(unwrap(data));
        if (isLeft(result)) {
            return left("createNewTypeError", unwrap(result));
        }
        else if (constrainedTypeKind.has(data)) {
            return right("createNewType", newTypeKind.setTo(constrainedTypeKind.addTo(data, {
                ...constrainedTypeKind.getValue(data),
                ...constraintKindValue,
            }), name));
        }
        else {
            return right("createNewType", newTypeKind.setTo(constrainedTypeKind.setTo(wrapValue(unwrap(result)), constraintKindValue), name));
        }
    }
    function createOrThrow(data) {
        const result = create(data);
        if (isLeft(result)) {
            throw new CreateNewTypeError(name, data, unwrap(result));
        }
        else {
            return unwrap(result);
        }
    }
    function is(input) {
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
    return pipe({
        name,
        dataParser: dataParserWithCheckers,
        constrains: constraints,
        getConstraint,
        create,
        createOrThrow,
        createWithUnknown: create,
        createWithUnknownOrThrow: createOrThrow,
        is,
    }, newTypeHandlerKind.setTo, createNewType.overrideHandler.apply);
}
createNewType.overrideHandler = createOverride("@duplojs/utils/clean/new-type");

export { CreateNewTypeError, createNewType, newTypeHandlerKind, newTypeKind };
