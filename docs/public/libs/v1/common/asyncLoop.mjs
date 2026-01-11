/**
 * {@include common/asyncLoop/index.md}
 */
async function asyncLoop(loop) {
    let previousOutput = undefined;
    for (let count = 0; true; count++) {
        const result = await loop({
            previousOutput,
            count,
            next: (data) => ({ "-nextData": data }),
            exit: (data) => ({ "-exitData": data }),
        });
        if ("-exitData" in result) {
            return result["-exitData"];
        }
        previousOutput = result["-nextData"];
    }
}

export { asyncLoop };
