function loop(loop) {
    let previousOutput = undefined;
    for (let count = 0; true; count++) {
        const result = loop({
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

export { loop };
