import { constrainedTypeKind } from './base.mjs';
import { coalescing } from '../../array/coalescing.mjs';

function castConstraint(constrainedType, constraintHandler) {
    const preparedConstraintHandler = coalescing(constraintHandler);
    const newConstraints = {
        ...constrainedTypeKind.getValue(constrainedType),
    };
    for (let index = 0; index < preparedConstraintHandler.length; index++) {
        const constraintHandler = preparedConstraintHandler[index];
        newConstraints[constraintHandler.name] = null;
    }
    return constrainedTypeKind.addTo(constrainedType, newConstraints);
}

export { castConstraint };
