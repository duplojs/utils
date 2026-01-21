import { isAbsolute } from './isAbsolute.mjs';
import { normalizeString } from './utils/normalizeString.mjs';
import { normalizeWindowsPath } from './utils/normalizeWindowsPath.mjs';
import { map } from '../../array/map.mjs';
import { push } from '../../array/push.mjs';
import { reduce, reduceFrom } from '../../array/reduce.mjs';
import { length } from '../../string/length.mjs';
import { concat } from '../../string/concat.mjs';

function resolveFrom(...args) {
    if (args.length === 1) {
        const [origin] = args;
        return (paths) => resolveFrom(paths, origin);
    }
    const [paths, origin] = args;
    const localPaths = map(paths, normalizeWindowsPath);
    const localOrigin = normalizeWindowsPath(origin);
    const allPaths = push(localPaths, localOrigin);
    const resolved = reduce(allPaths, reduceFrom({
        resolvedPath: "",
        resolvedAbsolute: false,
    }), ({ element, lastValue, next, exit }) => {
        if (lastValue.resolvedAbsolute) {
            return exit(lastValue);
        }
        if (length(element) === 0) {
            return next(lastValue);
        }
        return next({
            resolvedPath: concat(element, "/", lastValue.resolvedPath),
            resolvedAbsolute: isAbsolute(element),
        });
    });
    const normalizedPath = normalizeString(resolved.resolvedPath, { allowAboveRoot: !resolved.resolvedAbsolute });
    if (resolved.resolvedAbsolute && !isAbsolute(normalizedPath)) {
        return concat("/", normalizedPath);
    }
    return length(normalizedPath) > 0 ? normalizedPath : ".";
}

export { resolveFrom };
