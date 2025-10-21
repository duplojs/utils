import { nullishEmpty } from './empty.mjs';
import { nullishFilled } from './filled.mjs';

function nullish(value) {
    return value === null || value === undefined
        ? nullishEmpty(value)
        : nullishFilled(value);
}

export { nullish };
