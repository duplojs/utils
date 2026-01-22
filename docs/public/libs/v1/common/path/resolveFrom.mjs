import { isAbsolute } from './isAbsolute.mjs';
import { resolveRelative } from './resolveRelative.mjs';
import { success } from '../../either/right/success.mjs';
import { fail } from '../../either/left/fail.mjs';

/**
 * {@include common/path/resolveFrom/index.md}
 */
function resolveFrom(origin, segments) {
    const result = resolveRelative([origin, ...segments]);
    return isAbsolute(result)
        ? success(result)
        : fail();
}

export { resolveFrom };
