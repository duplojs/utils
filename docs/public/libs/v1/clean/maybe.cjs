'use strict';

var entity = require('./entity.cjs');
var create = require('../either/right/create.cjs');
var create$1 = require('../either/left/create.cjs');

/**
 * {@include clean/some/index.md}
 */
function some(entity$1) {
    return create.right(`some-${entity.entityKind.getValue(entity$1)}`, entity$1);
}
/**
 * {@include clean/none/index.md}
 */
function none(entityName) {
    return create$1.left(`none-${entityName}`, null);
}

exports.none = none;
exports.some = some;
