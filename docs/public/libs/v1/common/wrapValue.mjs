const keyWrappedValue = "@duplojs/utils/value";
/**
 * {@include common/wrapValue/index.md}
 */
function wrapValue(value) {
    return {
        [keyWrappedValue]: value,
    };
}
/**
 * {@include common/isWrappedValue/index.md}
 */
function isWrappedValue(input) {
    return !!input && typeof input === "object" && keyWrappedValue in input;
}
/**
 * {@include common/isRuntimeWrappedValueKey/index.md}
 */
function isRuntimeWrappedValueKey(value) {
    return value.startsWith(keyWrappedValue);
}

export { isRuntimeWrappedValueKey, isWrappedValue, keyWrappedValue, wrapValue };
