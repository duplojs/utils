import { split } from '../../string/split.mjs';
import { findLast } from '../../array/findLast.mjs';
import { length } from '../../string/length.mjs';
import { endsWith } from '../../string/endsWith.mjs';
import { slice } from '../../string/slice.mjs';

/**
 * {@include common/path/getBaseName/index.md}
 */
function getBaseName(path, params) {
    const segments = split(path, "/");
    const lastSegment = findLast(segments, (value) => length(value) > 0) ?? null;
    if (!lastSegment || lastSegment === "..") {
        return null;
    }
    if (params?.extension && endsWith(lastSegment, params?.extension)) {
        const extensionLength = length(params.extension);
        return slice(lastSegment, 0, -extensionLength);
    }
    return lastSegment;
}

export { getBaseName };
