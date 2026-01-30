import { unwrap } from './unwrap.mjs';

/**
 * {@include common/unwrapGroup/index.md}
 */
function unwrapGroup(group) {
    const result = {};
    for (const key in group) {
        result[key] = unwrap(group[key]);
    }
    return result;
}

export { unwrapGroup };
