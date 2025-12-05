import { bigint as bigint$1 } from '../bigint/index.mjs';

function bigint(definition) {
    return bigint$1({
        ...definition,
        coerce: true,
    });
}

export { bigint };
