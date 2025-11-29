import { boolFalsy } from './falsy.mjs';
import { boolTruthy } from './truthy.mjs';

function bool(value) {
    return value === undefined
        || value === null
        || value === 0
        || value === ""
        || value === false
        ? boolFalsy(value)
        : boolTruthy(value);
}

export { bool };
