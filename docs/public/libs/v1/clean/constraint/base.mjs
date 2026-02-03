import { createCleanKind } from '../kind.mjs';
import { kindHeritage } from '../../common/kind.mjs';
import { coalescing } from '../../array/coalescing.mjs';
import { pipe } from '../../common/pipe.mjs';
import { createErrorKind } from '../../common/errorKindNamespace.mjs';
import { createOverride } from '../../common/override.mjs';
import { isLeft } from '../../either/left/is.mjs';
import { unwrap } from '../../common/unwrap.mjs';
import { left } from '../../either/left/create.mjs';
import { right } from '../../either/right/create.mjs';
import { wrapValue } from '../../common/wrapValue.mjs';

const constrainedTypeKind = createCleanKind("constrained-type");
const constraintHandlerKind = createCleanKind("constraint-handler");
class CreateConstrainedTypeError extends kindHeritage("create-constrained-type-error", createErrorKind("create-constrained-type-error"), Error) {
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
    const checkers = coalescing(checker);
    const dataParserWithCheckers = primitiveHandler
        .dataParser
        .addChecker(...checkers);
    function create(data) {
        const result = dataParserWithCheckers.parse(unwrap(data));
        if (isLeft(result)) {
            return left("createConstrainedTypeError", unwrap(result));
        }
        else if (constrainedTypeKind.has(data)) {
            return right("createConstrainedType", constrainedTypeKind.addTo(data, {
                ...constrainedTypeKind.getValue(data),
                [name]: null,
            }));
        }
        else {
            return right("createConstrainedType", constrainedTypeKind.setTo(wrapValue(unwrap(result)), { [name]: null }));
        }
    }
    function createOrThrow(data) {
        const result = create(data);
        if (isLeft(result)) {
            throw new CreateConstrainedTypeError(name, data, unwrap(result));
        }
        else {
            return unwrap(result);
        }
    }
    function is(input) {
        if (constrainedTypeKind.has(input)
            && constrainedTypeKind.getValue(input)[name] === null) {
            return true;
        }
        return false;
    }
    return pipe({
        name,
        primitiveHandler,
        checkers,
        create,
        createOrThrow,
        createWithUnknown: create,
        createWithUnknownOrThrow: createOrThrow,
        is,
    }, constraintHandlerKind.setTo, createConstraint.overrideHandler.apply);
}
createConstraint.overrideHandler = createOverride("@duplojs/utils/clean/constraint");

export { CreateConstrainedTypeError, constrainedTypeKind, constraintHandlerKind, createConstraint };
