'use strict';

var base = require('./base.cjs');
var coalescing = require('../../array/coalescing.cjs');

function castConstraint(constrainedType, constraintHandler) {
    const preparedConstraintHandler = coalescing.coalescing(constraintHandler);
    const newConstraints = {
        ...base.constrainedTypeKind.getValue(constrainedType),
    };
    for (let index = 0; index < preparedConstraintHandler.length; index++) {
        const constraintHandler = preparedConstraintHandler[index];
        newConstraints[constraintHandler.name] = null;
    }
    return base.constrainedTypeKind.addTo(constrainedType, newConstraints);
}

exports.castConstraint = castConstraint;
