import { pipe } from '../pipe.mjs';
import { isAbsolute } from './isAbsolute.mjs';
import { slice } from '../../array/slice.mjs';
import { split } from '../../string/split.mjs';
import { replace } from '../../string/replace.mjs';
import { join } from '../../array/join.mjs';

/**
 * {@include common/path/getParentFolderPath/index.md}
 */
function getParentFolderPath(path) {
    const segments = pipe(path, replace(/\/$/, ""), split("/"), slice(0, -1));
    return join(segments, "/")
        || (isAbsolute(path)
            ? "/"
            : ".");
}

export { getParentFolderPath };
