function between(...args) {
    if (args.length === 2) {
        const [greater, less] = args;
        return (input) => between(input, greater, less);
    }
    const [input, greater, less] = args;
    return input >= greater && input <= less;
}

export { between };
