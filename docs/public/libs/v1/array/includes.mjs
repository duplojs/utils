function includes(...args) {
    if (args.length === 1) {
        const [value] = args;
        return (array) => includes(array, value);
    }
    const [array, value] = args;
    return array.includes(value);
}

export { includes };
