'use strict';

var kind = require('../kind.cjs');

const dependenceHandlerKind = kind.createFlowKind("dependence-handler");
/**
 * {@include flow/createDependence/index.md}
 */
function createDependence(name) {
    const dependenceHandler = function (implementation) {
        return implementation;
    };
    return dependenceHandlerKind.setTo(dependenceHandler, name);
}

exports.createDependence = createDependence;
exports.dependenceHandlerKind = dependenceHandlerKind;
