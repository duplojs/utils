'use strict';

var index = require('./index.cjs');
var flag = require('../flag.cjs');
var wrapValue = require('../../common/wrapValue.cjs');
var unwrap = require('../../common/unwrap.cjs');

/**
 * {@include clean/unwrapEntity/index.md}
 */
function unwrapEntityProperty(property, params) {
    if (wrapValue.isWrappedValue(property)) {
        return params?.transformer
            ? params.transformer(unwrap.unwrap(property))
            : unwrap.unwrap(property);
    }
    else if (property === null) {
        return property;
    }
    else if (typeof property === "string") {
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
        if (prop === index.entityKind.runTimeKey) {
            unwrapEntity._entityName = entity[prop];
        }
        else if (prop === flag.flagKind.runTimeKey) {
            unwrapEntity._flags = entity[prop];
        }
        else {
            unwrapEntity[prop] = unwrapEntityProperty(entity[prop], params);
        }
    }
    return unwrapEntity;
}

exports.unwrapEntity = unwrapEntity;
exports.unwrapEntityProperty = unwrapEntityProperty;
