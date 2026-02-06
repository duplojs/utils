function transformer(input, methodName) {
    if (input
        && typeof input === "object"
        && methodName in input
        && typeof input[methodName] === "function") {
        return input[methodName]();
    }
    else if (typeof input === "object"
        && input !== null
        && (!input.constructor
            || input.constructor.name === "Object")) {
        const result = {};
        for (const key in input) {
            result[key] = transformer(input[key], methodName);
        }
        return result;
    }
    else if (input instanceof Array
        && input.constructor.name === "Array") {
        const length = input.length;
        const result = [];
        for (let index = 0; index < length; index++) {
            result[index] = transformer(input[index], methodName);
        }
        return result;
    }
    else {
        return input;
    }
}
/**
 * {@include common/createTransformer/index.md}
 */
function createTransformer(methodName) {
    return (input) => transformer(input, methodName);
}
const toNative = createTransformer("toNative");
const toJSON = createTransformer("toJSON");

export { createTransformer, toJSON, toNative, transformer };
