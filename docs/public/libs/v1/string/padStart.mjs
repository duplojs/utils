function padStart(...args) {
    if (args.length === 2) {
        const [targetLength, padString] = args;
        return (input) => padStart(input, targetLength, padString);
    }
    const [input, targetLength, padString] = args;
    return input.padStart(targetLength, padString);
}

export { padStart };
