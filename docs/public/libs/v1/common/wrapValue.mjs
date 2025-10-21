const keyWrappedValue = "@duplojs/utils/value";
function wrapValue(value) {
    return {
        [keyWrappedValue]: value,
    };
}
function isWrappedValue(input) {
    return !!input && typeof input === "object" && keyWrappedValue in input;
}

export { isWrappedValue, keyWrappedValue, wrapValue };
