import { startsWith } from '../../string/startsWith.mjs';
import { test } from '../../string/test.mjs';

const isRelativeRegex = /(^|\/)\.\.(?=\/|$)/;
/**
 * {@include common/path/isAbsolute/index.md}
 */
function isAbsolute(path) {
    return startsWith(path, "/")
        && !test(path, isRelativeRegex);
}

export { isAbsolute };
