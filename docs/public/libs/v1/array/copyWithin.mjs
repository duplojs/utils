function copyWithin(...args) {
    if (!Array.isArray(args[0])) {
        const [target, start, end] = args;
        return (array) => copyWithin(array, target, start, end);
    }
    const [array, target, start, end] = args;
    return [...array].copyWithin(target, start, end);
}

export { copyWithin };
