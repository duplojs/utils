/**
 * {@include common/pipeCall/index.md}
 */
function pipeCall(theFunction) {
    return (input) => theFunction(input);
}

export { pipeCall };
