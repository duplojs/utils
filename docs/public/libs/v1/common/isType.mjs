const testTypeWrapper = {
    string: (input) => typeof input === "string",
    number: (input) => typeof input === "number",
    bigint: (input) => typeof input === "bigint",
    boolean: (input) => typeof input === "boolean",
    function: (input) => typeof input === "function",
    symbol: (input) => typeof input === "symbol",
    undefined: (input) => typeof input === "undefined",
    null: (input) => input === null,
    array: (input) => input instanceof Array,
    object: (input) => !!input && typeof input === "object" && !(input instanceof Array),
};
function isType(...args) {
    if (args.length === 1) {
        const [type] = args;
        return (input) => isType(input, type);
    }
    const [input, type] = args;
    return testTypeWrapper[type](input);
}

export { isType };
