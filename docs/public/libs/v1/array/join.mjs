function join(...args) {
    if (args.length === 1) {
        const [separator] = args;
        return (array) => join(array, separator);
    }
    const [array, separator] = args;
    return array.join(separator);
}

export { join };
