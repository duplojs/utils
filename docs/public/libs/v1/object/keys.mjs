import { keyWrappedValue } from '../common/wrapValue.mjs';

function keys(object) {
    return Object.keys(object)
        .filter((key) => !key.startsWith(keyWrappedValue));
}

export { keys };
