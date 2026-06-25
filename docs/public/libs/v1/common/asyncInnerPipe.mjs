function asyncInnerPipe(...pipes) {
    return async (input) => {
        let acc = await input;
        for (const pipe of pipes) {
            acc = await pipe(acc);
        }
        return acc;
    };
}

export { asyncInnerPipe };
