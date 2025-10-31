async function* asyncLoop(loop) {
    let previousOutput = undefined;
    for (let count = 0; true; count++) {
        const result = await loop({
            previousOutput,
            count,
            next: (data) => ({ "-nextData": data }),
            exit: (data) => ({ "-exitData": data }),
        });
        if ("-exitData" in result) {
            if (result["-exitData"] !== undefined) {
                yield result["-exitData"];
            }
            break;
        }
        previousOutput = result["-nextData"];
        if (previousOutput !== undefined) {
            yield previousOutput;
        }
    }
    return;
}

export { asyncLoop };
