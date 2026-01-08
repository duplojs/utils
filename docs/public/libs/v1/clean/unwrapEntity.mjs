import { entityKind } from './entity.mjs';
import { flagKind } from './flag.mjs';
import { unwrap } from '../common/unwrap.mjs';

function unwrapEntity(entity) {
    const unwrapEntity = {};
    for (const prop in entity) {
        if (prop === entityKind.runTimeKey) {
            unwrapEntity._entityName = entity[prop];
        }
        else if (prop === flagKind.runTimeKey) {
            unwrapEntity._flags = entity[prop];
        }
        else if (entity[prop] instanceof Array) {
            unwrapEntity[prop] = entity[prop].map(unwrap);
        }
        else {
            unwrapEntity[prop] = unwrap(entity[prop]);
        }
    }
    return unwrapEntity;
}

export { unwrapEntity };
