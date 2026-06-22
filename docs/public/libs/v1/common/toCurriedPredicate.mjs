/**
 * {@include common/toCurriedPredicate/index.md}
 */
function toCurriedPredicate(thePredicate) {
    return (input) => thePredicate(input);
}

export { toCurriedPredicate };
