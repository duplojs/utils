'use strict';

var kind = require('./kind.cjs');
var pipe = require('../common/pipe.cjs');
var override = require('../common/override.cjs');

const flagHandlerKind = kind.createCleanKind("flag-handler");
const flagKind = kind.createCleanKind("flag");
/**
 * {@include clean/createFlag/index.md}
 */
function createFlag(name) {
    return pipe.pipe({
        name,
        append(entity, value) {
            const flagValue = flagKind.has(entity)
                ? {
                    ...flagKind.getValue(entity),
                    [name]: value,
                }
                : { [name]: value };
            return flagKind.addTo(entity, flagValue);
        },
        getValue(entity) {
            return flagKind.getValue(entity)[name];
        },
        has(entity) {
            return flagKind.has(entity)
                && name in flagKind.getValue(entity);
        },
    }, flagHandlerKind.setTo, createFlag.overrideHandler.apply);
}
createFlag.overrideHandler = override.createOverride("@duplojs/utils/clean/flag");

exports.createFlag = createFlag;
exports.flagKind = flagKind;
