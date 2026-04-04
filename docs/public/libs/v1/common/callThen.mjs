/**
 * {@include common/callThen/index.md}
 */
function callThen(input, TheFunction) {
    if (input instanceof Promise) {
        return input
            .then(TheFunction);
    }
    return TheFunction(input);
}

export { callThen };
