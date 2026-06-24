import { createCleanKind } from '../kind.mjs';
import { constrainedTypeKind } from './base.mjs';
import { kindHeritage } from '../../common/kind.mjs';
import { createErrorKind } from '../../common/errorKindNamespace.mjs';
import { flatMap } from '../../array/flatMap.mjs';
import { coalescing } from '../../array/coalescing.mjs';
import { reduce, reduceFrom } from '../../array/reduce.mjs';
import { map } from '../../array/map.mjs';
import { pipe } from '../../common/pipe.mjs';
import { fromEntries } from '../../object/fromEntries.mjs';
import { entry } from '../../object/entry.mjs';
import { isLeft } from '../../either/left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { first } from '../../array/at/first.mjs';
import { checkerKind } from '../../dataParser/baseChecker.mjs';
import { left } from '../../either/left/create.mjs';
import { right } from '../../either/right/create.mjs';
import { wrapValue } from '../../common/wrapValue.mjs';
import { createOverride } from '../../common/override.mjs';

const constraintsSetHandlerKind = createCleanKind("constraints-set-handler");
class CreateConstraintsSetError extends kindHeritage("create-constraint-set-error", createErrorKind("create-constraint-set-error"), Error) {
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
    const constraints = flatMap(coalescing(constraint), (constraint) => constraintsSetHandlerKind.has(constraint)
        ? constraint.internal.constraints
        : constraint);
    const sourceMapper = reduce(constraints, reduceFrom(new Map()), ({ element: constraint, next, lastValue: mapper }) => {
        void map(constraint.internal.checkers, (checker) => mapper.set(checker, constraint));
        return next(mapper);
    });
    const checkers = flatMap(constraints, ({ internal }) => internal.checkers);
    const dataParserWithCheckers = primitiveHandler
        .internal
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
            const dataParserError = unwrap(result);
            const source = first(dataParserError.issues)?.getSource();
            const constrainedSource = (checkerKind.has(source)
                && sourceMapper.get(source)) || first(constraints);
            return left("createConstraintsSetError", {
                constraintName: constrainedSource.name,
                dataParserError,
            });
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
            const errorContent = unwrap(result);
            throw new CreateConstraintsSetError(errorContent.constraintName, data, errorContent.dataParserError);
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
        internal: {
            primitiveHandler,
            constraints,
            constraintKindValue,
            dataParser: dataParserWithCheckers,
        },
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
