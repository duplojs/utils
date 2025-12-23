import { boolean as boolean$1 } from '../boolean.mjs';

function boolean(definition) {
    return boolean$1({
        ...definition,
        coerce: true,
    });
}

export { boolean };
