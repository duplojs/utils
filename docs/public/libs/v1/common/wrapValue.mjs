const keyWrappedValue = "@duplojs/utils/value";
function wrapValue(value) {
    return {
        [keyWrappedValue]: value,
    };
}
function isWrappedValue(input) {
    return !!input && typeof input === "object" && keyWrappedValue in input;
}
function isRuntimeWrappedValueKey(value) {
    return value.startsWith(keyWrappedValue);
}

export { isRuntimeWrappedValueKey, isWrappedValue, keyWrappedValue, wrapValue };
