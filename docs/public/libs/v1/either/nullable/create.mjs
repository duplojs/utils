import { nullableEmpty } from './empty.mjs';
import { nullableFilled } from './filled.mjs';

function nullable(value) {
    return value === null
        ? nullableEmpty()
        : nullableFilled(value);
}

export { nullable };
