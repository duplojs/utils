import { wrapValue, isWrappedValue } from './wrapValue.mjs';

/**
 * {@include common/toWrappedValue/index.md}
 */
function toWrappedValue(value) {
    return isWrappedValue(value)
        ? value
        : wrapValue(value);
}

export { toWrappedValue };
