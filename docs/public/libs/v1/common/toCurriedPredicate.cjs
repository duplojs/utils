'use strict';

/**
 * {@include common/toCurriedPredicate/index.md}
 */
function toCurriedPredicate(thePredicate) {
    return (input) => thePredicate(input);
}

exports.toCurriedPredicate = toCurriedPredicate;
