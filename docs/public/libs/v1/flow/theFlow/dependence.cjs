'use strict';

var kind = require('../kind.cjs');
var pipe = require('../../common/pipe.cjs');

const dependenceHandlerKind = kind.createFlowKind("dependence-handler");
/**
 * {@include flow/createDependence/index.md}
 */
function createDependence(name) {
    const dependenceHandler = function (implementation) {
        return implementation;
    };
    return pipe.pipe(dependenceHandler, (value) => dependenceHandlerKind.setTo(value, name));
}

exports.createDependence = createDependence;
exports.dependenceHandlerKind = dependenceHandlerKind;
