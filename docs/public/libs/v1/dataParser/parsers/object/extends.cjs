'use strict';

var index = require('./index.cjs');
var assign = require('../../../object/assign.cjs');

function extendsShape(shape, extension) {
    return assign.assign(shape, extension);
}
/**
 * {@include dataParser/classic/object/extends/index.md}
 */
function extend(dataParser, extension, definition) {
    const newShape = extendsShape(dataParser.definition.shape, extension);
    return index.object(newShape, definition);
}

exports.extends = extend;
exports.extendsShape = extendsShape;
