import { normalizeWindowsPath } from './utils/normalizeWindowsPath.mjs';
import { pipe } from '../pipe.mjs';
import { isAbsolute } from 'path';
import { slice } from '../../array/slice.mjs';
import { split } from '../../string/split.mjs';
import { replace } from '../../string/replace.mjs';
import { minElements } from '../../array/minElements.mjs';
import { test } from '../../string/test.mjs';
import { join } from '../../array/join.mjs';

const driveLetterRegex = /^[A-Za-z]:$/;
function getParentFolderPath(path) {
    const segments = pipe(path, normalizeWindowsPath, replace(/\/$/, ""), split("/"), slice(0, -1));
    if (minElements(segments, 1)
        && test(segments[0], driveLetterRegex)) {
        segments[0] += "/";
    }
    return join(segments, "/")
        || (isAbsolute(path)
            ? "/"
            : ".");
}

export { getParentFolderPath };
