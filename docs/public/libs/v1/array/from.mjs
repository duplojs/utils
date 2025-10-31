function from(input) {
    if (typeof input === "object" && Symbol.asyncIterator in input) {
        return (async () => {
            const array = [];
            for await (const element of input) {
                array.push(element);
            }
            return array;
        })();
    }
    return Array.from(input);
}

export { from };
