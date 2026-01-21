import { isAbsolute } from './isAbsolute.mjs';
import { resolveRelative } from './resolveRelative.mjs';
import { success } from '../../either/right/success.mjs';
import { fail } from '../../either/left/fail.mjs';

function resolveFrom(...args) {
    if (args.length === 1) {
        const [origin] = args;
        return (paths) => resolveFrom(paths, origin);
    }
    const [paths, origin] = args;
    const result = resolveRelative(origin, ...paths);
    return isAbsolute(result)
        ? success(result)
        : fail();
}

export { resolveFrom };
