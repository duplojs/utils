import { entityKind } from './entity.mjs';
import { flagKind } from './flag.mjs';
import { forward } from '../common/forward.mjs';
import { unwrap } from '../common/unwrap.mjs';

/**
 * {@include clean/unwrapEntity/index.md}
 */
function unwrapEntity(entity, params) {
    const transformer = params?.transformer ?? forward;
    const unwrapEntity = {};
    for (const prop in entity) {
        if (prop === entityKind.runTimeKey) {
            unwrapEntity._entityName = entity[prop];
        }
        else if (prop === flagKind.runTimeKey) {
            unwrapEntity._flags = entity[prop];
        }
        else if (entity[prop] instanceof Array) {
            const length = entity[prop].length;
            const result = [];
            for (let index = 0; index < length; index++) {
                result[index] = transformer(unwrap(entity[prop][index]));
            }
            unwrapEntity[prop] = result;
        }
        else {
            unwrapEntity[prop] = transformer(unwrap(entity[prop]));
        }
    }
    return unwrapEntity;
}

export { unwrapEntity };
