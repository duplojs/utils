/**
 * {@include common/escapeRegExp/index.md}
 */
function escapeRegExp(input) {
    return input.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

export { escapeRegExp };
