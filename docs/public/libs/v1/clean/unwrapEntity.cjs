'use strict';

var entity = require('./entity.cjs');
var flag = require('./flag.cjs');
var forward = require('../common/forward.cjs');
var unwrap = require('../common/unwrap.cjs');

/**
 * {@include clean/unwrapEntity/index.md}
 */
function unwrapEntity(entity$1, params) {
    const transformer = params?.transformer ?? forward.forward;
    const unwrapEntity = {};
    for (const prop in entity$1) {
        if (prop === entity.entityKind.runTimeKey) {
            unwrapEntity._entityName = entity$1[prop];
        }
        else if (prop === flag.flagKind.runTimeKey) {
            unwrapEntity._flags = entity$1[prop];
        }
        else if (entity$1[prop] instanceof Array) {
            const length = entity$1[prop].length;
            const result = [];
            for (let index = 0; index < length; index++) {
                result[index] = transformer(unwrap.unwrap(entity$1[prop][index]));
            }
            unwrapEntity[prop] = result;
        }
        else {
            unwrapEntity[prop] = transformer(unwrap.unwrap(entity$1[prop]));
        }
    }
    return unwrapEntity;
}

exports.unwrapEntity = unwrapEntity;
