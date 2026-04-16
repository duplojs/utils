'use strict';

var index = require('./entity/index.cjs');
var kind = require('./kind.cjs');
var pipe = require('../common/pipe.cjs');
var override = require('../common/override.cjs');

const flagHandlerKind = kind.createCleanKind("flag-handler");
const flagKind = kind.createCleanKind("flag");
/**
 * {@include clean/createFlag/index.md}
 */
function createFlag(name) {
    function append(maybeEntity, value) {
        if (!index.entityKind.has(maybeEntity)) {
            return (entity) => append(entity, maybeEntity);
        }
        const flagValue = flagKind.has(maybeEntity)
            ? {
                ...flagKind.getValue(maybeEntity),
                [name]: value,
            }
            : { [name]: value };
        return flagKind.addTo(maybeEntity, flagValue);
    }
    return pipe.pipe({
        name,
        append,
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
