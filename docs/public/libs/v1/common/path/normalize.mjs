import { isAbsolute } from './isAbsolute.mjs';
import { normalizeWindowsPath } from './utils/normalizeWindowsPath.mjs';
import { normalizeString } from './utils/normalizeString.mjs';
import { length } from '../../string/length.mjs';
import { endsWith } from '../../string/endsWith.mjs';
import { concat } from '../../string/concat.mjs';
import { test } from '../../string/test.mjs';

const driveLetterRegex = /^[A-Za-z]:$/;
function normalize(path) {
    if (length(path) === 0) {
        return ".";
    }
    const localPath = normalizeWindowsPath(path);
    const isPathAbsolute = isAbsolute(localPath);
    const trailingSeparator = endsWith(localPath, "/");
    let normalizedPath = normalizeString(localPath, { allowAboveRoot: !isPathAbsolute });
    if (length(normalizedPath) === 0) {
        if (isPathAbsolute) {
            return "/";
        }
        return trailingSeparator ? "./" : ".";
    }
    if (trailingSeparator) {
        normalizedPath = concat(normalizedPath, "/");
    }
    if (driveLetterRegex.test(normalizedPath)) {
        normalizedPath = concat(normalizedPath, "/");
    }
    if (test(localPath, /^[/\\]{2}/)) {
        if (!isPathAbsolute) {
            return `//./${normalizedPath}`;
        }
        return `//${normalizedPath}`;
    }
    const isPathNormalizedAbsolute = isAbsolute(normalizedPath);
    return isPathAbsolute && !isPathNormalizedAbsolute
        ? `/${normalizedPath}`
        : normalizedPath;
}

export { normalize };
