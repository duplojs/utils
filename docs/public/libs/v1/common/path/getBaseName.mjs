import { pipe } from '../pipe.mjs';
import { normalizeWindowsPath } from './utils/normalizeWindowsPath.mjs';
import { split } from '../../string/split.mjs';
import { findLast } from '../../array/findLast.mjs';
import { length } from '../../string/length.mjs';
import { endsWith } from '../../string/endsWith.mjs';
import { slice } from '../../string/slice.mjs';

function getBaseName(path, params) {
    const segments = pipe(path, normalizeWindowsPath, split("/"));
    const lastSegment = findLast(segments, (value) => length(value) > 0) ?? "";
    if (params?.extension && endsWith(lastSegment, params?.extension)) {
        const extensionLength = length(params.extension);
        return slice(lastSegment, 0, -extensionLength);
    }
    return lastSegment;
}

export { getBaseName };
