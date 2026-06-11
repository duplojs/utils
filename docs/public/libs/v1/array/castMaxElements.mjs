function castMaxElements(...args) {
    if (args.length === 1) {
        const [maxLength] = args;
        return (array) => castMaxElements(array, maxLength);
    }
    const [array] = args;
    return array;
}

export { castMaxElements };
