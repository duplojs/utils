function padEnd(...args) {
    if (args.length === 2) {
        const [targetLength, padString] = args;
        return (input) => padEnd(input, targetLength, padString);
    }
    const [input, targetLength, padString] = args;
    return input.padEnd(targetLength, padString);
}

export { padEnd };
