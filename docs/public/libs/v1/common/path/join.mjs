import { normalize } from './normalize.mjs';
import { length } from '../../string/length.mjs';
import { endsWith } from '../../string/endsWith.mjs';
import { startsWith } from '../../string/startsWith.mjs';
import { concat } from '../../string/concat.mjs';
import { slice } from '../../string/slice.mjs';

function join(...segments) {
    let path = "";
    for (const segment of segments) {
        const segmentLength = length(segment);
        if (segmentLength === 0) {
            continue;
        }
        if (length(path) === 0) {
            path = segment;
            continue;
        }
        const pathTrailing = endsWith(path, "/");
        const segmentLeading = startsWith(segment, "/");
        if (pathTrailing && segmentLeading) {
            path = concat(path, slice(segment, 1, segmentLength));
        }
        else if (pathTrailing || segmentLeading) {
            path = concat(path, segment);
        }
        else {
            path = concat(path, "/", segment);
        }
    }
    return normalize(path);
}

export { join };
