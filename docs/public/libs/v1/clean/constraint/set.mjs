import { createCleanKind } from '../kind.mjs';
import { constrainedTypeKind } from './base.mjs';
import { kindHeritage } from '../../common/kind.mjs';
import { flatMap } from '../../array/flatMap.mjs';
import { coalescing } from '../../array/coalescing.mjs';
import { pipe } from '../../common/pipe.mjs';
import { map } from '../../array/map.mjs';
import { entry } from '../../object/entry.mjs';
import { createErrorKind } from '../../common/errorKindNamespace.mjs';
import { fromEntries } from '../../object/fromEntries.mjs';
import { createOverride } from '../../common/override.mjs';
import { isLeft } from '../../either/left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { left } from '../../either/left/create.mjs';
import { right } from '../../either/right/create.mjs';
import { wrapValue } from '../../common/wrapValue.mjs';

const constraintsSetHandlerKind = createCleanKind("constraints-set-handler");
class CreateConstraintsSetError extends kindHeritage("create-constraint-set-error", createErrorKind("create-constraint-set-error"), Error) {
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
    const constraints = coalescing(constraint);
    const checkers = flatMap(constraints, ({ checkers }) => checkers);
    const dataParserWithCheckers = primitiveHandler
        .dataParser
        .addChecker(...checkers);
    const constraintKindValue = pipe(constraints, map(({ name }) => entry(name, null)), fromEntries);
    const wrappedConstraints = pipe(constraints, map((constrain) => entry(constrain.name, constrain)), fromEntries);
    function getConstraint(name) {
        return wrappedConstraints[name];
    }
    function create(data) {
        const result = dataParserWithCheckers.parse(unwrap(data));
        if (isLeft(result)) {
            return left("createConstraintsSetError", unwrap(result));
        }
        else if (constrainedTypeKind.has(data)) {
            return right("createConstraintsSet", constrainedTypeKind.addTo(data, {
                ...constrainedTypeKind.getValue(data),
                ...constraintKindValue,
            }));
        }
        else {
            return right("createConstraintsSet", constrainedTypeKind.setTo(wrapValue(unwrap(result)), constraintKindValue));
        }
    }
    function createOrThrow(data) {
        const result = create(data);
        if (isLeft(result)) {
            throw new CreateConstraintsSetError(data, unwrap(result));
        }
        else {
            return unwrap(result);
        }
    }
    function is(input) {
        if (!constrainedTypeKind.has(input)) {
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
        primitiveHandler,
        constraints,
        getConstraint,
        create,
        createOrThrow,
        createWithUnknown: create,
        createWithUnknownOrThrow: createOrThrow,
        is,
    }, constraintsSetHandlerKind.setTo, createConstraintsSet.overrideHandler.apply);
}
createConstraintsSet.overrideHandler = createOverride("@duplojs/utils/clean/constraints-set");

export { CreateConstraintsSetError, constraintsSetHandlerKind, createConstraintsSet };
