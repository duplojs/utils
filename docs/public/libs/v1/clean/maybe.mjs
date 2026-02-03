import { entityKind } from './entity.mjs';
import { right } from '../either/right/create.mjs';
import { left } from '../either/left/create.mjs';

/**
 * {@include clean/some/index.md}
 */
function some(entity) {
    return right(`some-${entityKind.getValue(entity)}`, entity);
}
/**
 * {@include clean/none/index.md}
 */
function none(entityName) {
    return left(`none-${entityName}`, null);
}

export { none, some };
