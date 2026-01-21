import { split } from '../../../string/split.mjs';
import { reduce, reduceFrom } from '../../../array/reduce.mjs';
import { length } from '../../../string/length.mjs';
import { length as length$1 } from '../../../array/length.mjs';
import { pop } from '../../../array/pop.mjs';
import { join } from '../../../array/join.mjs';

function normalizeString(path, params) {
    const segments = split(path, "/");
    const normalizedSegments = reduce(segments, reduceFrom([]), ({ element, lastValue, next, nextPush }) => {
        if (length(element) === 0 || element === ".") {
            return next(lastValue);
        }
        if (element === "..") {
            const lastIndex = length$1(lastValue) - 1;
            const lastSegment = lastIndex >= 0 ? lastValue[lastIndex] : "";
            if (lastIndex >= 0 && lastSegment !== "..") {
                return next(pop(lastValue));
            }
            if (params?.allowAboveRoot) {
                return nextPush(lastValue, "..");
            }
            return next(lastValue);
        }
        return nextPush(lastValue, element);
    });
    return join(normalizedSegments, "/");
}

export { normalizeString };
