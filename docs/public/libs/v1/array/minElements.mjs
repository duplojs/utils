function minElements(...args) {
    if (args.length === 1) {
        const [minLength] = args;
        return (array) => minElements(array, minLength);
    }
    const [array, minLength] = args;
    return array.length >= minLength;
}

export { minElements };
