import { pipe } from '../../pipe.mjs';
import { replace } from '../../../string/replace.mjs';
import { toUpperCase } from '../../../string/toUpperCase.mjs';

const driveLetterRegex = /^[A-Za-z]:$/;
function normalizeWindowsPath(path) {
    return pipe(path, replace(/\\/g, "/"), replace(driveLetterRegex, ({ matchedValue }) => toUpperCase(matchedValue)));
}

export { normalizeWindowsPath };
