import { date as date$1 } from '../date.mjs';

function date(definition) {
    return date$1({
        ...definition,
        coerce: true,
    });
}

export { date };
