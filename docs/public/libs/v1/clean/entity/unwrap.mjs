import { entityKind } from './index.mjs';
import { flagKind } from '../flag.mjs';
import { isWrappedValue } from '../../common/wrapValue.mjs';
import { unwrap } from '../../common/unwrap.mjs';

/**
 * {@include clean/unwrapEntity/index.md}
 */
function unwrapEntityProperty(property, params) {
    if (isWrappedValue(property)) {
        return params?.transformer
            ? params.transformer(unwrap(property))
            : unwrap(property);
    }
    else if (property === null) {
        return property;
    }
    else if (property instanceof Array) {
        const length = property.length;
        const result = [];
        for (let index = 0; index < length; index++) {
            result[index] = unwrapEntityProperty(property[index], params);
        }
        return result;
    }
    else if (typeof property === "object"
        && (!property.constructor
            || property.constructor.name === "Object")) {
        const result = {};
        for (const key in property) {
            result[key] = unwrapEntityProperty(property[key], params);
        }
        return result;
    }
    else {
        return property;
    }
}
function unwrapEntity(entity, params) {
    const unwrapEntity = {};
    for (const prop in entity) {
        if (prop === entityKind.runTimeKey) {
            unwrapEntity._entityName = entity[prop];
        }
        else if (prop === flagKind.runTimeKey) {
            unwrapEntity._flags = entity[prop];
        }
        else {
            unwrapEntity[prop] = unwrapEntityProperty(entity[prop], params);
        }
    }
    return unwrapEntity;
}

export { unwrapEntity, unwrapEntityProperty };
