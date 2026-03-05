const exitExternalAsync = Symbol("exitExternalAsync");
/**
 * {@include generator/createExternalAsyncGenerator/index.md}
 */
function createExternalAsyncGenerator() {
    let externalResolve = undefined;
    return {
        asyncGenerator: (async function* () {
            const result = await new Promise((resolve) => {
                externalResolve = resolve;
            });
            if (result === exitExternalAsync) {
                return;
            }
            else {
                yield result;
            }
        })(),
        next: (value) => void externalResolve?.(value),
        exit: () => void externalResolve?.(exitExternalAsync),
    };
}

export { createExternalAsyncGenerator };
