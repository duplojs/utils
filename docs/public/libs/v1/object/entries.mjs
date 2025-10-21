import { keyWrappedValue } from '../common/wrapValue.mjs';

function entries(object) {
    return Object.entries(object)
        .filter(([key]) => !key.startsWith(keyWrappedValue));
}

export { entries };
