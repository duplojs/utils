function chunk(...args) {
    if (args.length === 1) {
        const [size] = args;
        return (input) => chunk(input, size);
    }
    const [input, size] = args;
    const result = [];
    for (let index = 0; index < input.length; index += size) {
        result.push(input.slice(index, index + size));
    }
    return result;
}

export { chunk };
