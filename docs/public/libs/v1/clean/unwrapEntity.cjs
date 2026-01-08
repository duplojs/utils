'use strict';

var entity = require('./entity.cjs');
var flag = require('./flag.cjs');
var unwrap = require('../common/unwrap.cjs');

function unwrapEntity(entity$1) {
    const unwrapEntity = {};
    for (const prop in entity$1) {
        if (prop === entity.entityKind.runTimeKey) {
            unwrapEntity._entityName = entity$1[prop];
        }
        else if (prop === flag.flagKind.runTimeKey) {
            unwrapEntity._flags = entity$1[prop];
        }
        else if (entity$1[prop] instanceof Array) {
            unwrapEntity[prop] = entity$1[prop].map(unwrap.unwrap);
        }
        else {
            unwrapEntity[prop] = unwrap.unwrap(entity$1[prop]);
        }
    }
    return unwrapEntity;
}

exports.unwrapEntity = unwrapEntity;
