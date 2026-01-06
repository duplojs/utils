import { time as time$1 } from '../time.mjs';

function time(definition) {
    return time$1({
        ...definition,
        coerce: true,
    });
}

export { time };
