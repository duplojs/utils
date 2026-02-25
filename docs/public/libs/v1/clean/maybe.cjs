'use strict';

var index = require('./entity/index.cjs');
var create = require('../either/right/create.cjs');
var create$1 = require('../either/left/create.cjs');

/**
 * {@include clean/some/index.md}
 */
function some(entity) {
    return create.right(`some-${index.entityKind.getValue(entity)}`, entity);
}
/**
 * {@include clean/none/index.md}
 */
function none(entityName) {
    return create$1.left(`none-${entityName}`, null);
}

exports.none = none;
exports.some = some;
