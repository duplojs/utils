import { time as time$1 } from '../time/index.mjs';

function time(definition) {
    return time$1({
        ...definition,
        coerce: true,
    });
}

export { time };
