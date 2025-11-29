function set(...args) {
    if (args.length === 2) {
        const [index, value] = args;
        return (array) => set(array, index, value);
    }
    const [array, index, value] = args;
    const length = array.length;
    const modIndex = ((index % length) + length) % length;
    return array.with(modIndex, value);
}

export { set };
