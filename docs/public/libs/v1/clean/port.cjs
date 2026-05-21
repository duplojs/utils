'use strict';

var kind = require('./kind.cjs');
var pipe = require('../common/pipe.cjs');
var override = require('../common/override.cjs');

const portHandlerKind = kind.createCleanKind("port-handler");
/**
 * {@include clean/createPort/index.md}
 */
function createPort() {
    return pipe.pipe({
        createImplementation(implementation) {
            return implementation;
        },
    }, portHandlerKind.setTo, createPort.overrideHandler.apply);
}
createPort.overrideHandler = override.createOverride("@duplojs/utils/clean/port");

exports.createPort = createPort;
exports.portHandlerKind = portHandlerKind;
