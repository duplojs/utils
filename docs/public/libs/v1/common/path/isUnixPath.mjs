import { includes } from '../../string/includes.mjs';

function isUnixPath(path) {
    return !includes(path, "\\");
}

export { isUnixPath };
