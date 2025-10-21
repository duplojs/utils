function normalize(...args) {
    if (args.length === 1) {
        const [form] = args;
        return (input) => normalize(input, form);
    }
    const [input, form] = args;
    return input.normalize(form);
}

export { normalize };
