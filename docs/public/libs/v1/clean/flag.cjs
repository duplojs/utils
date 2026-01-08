'use strict';

var kind = require('./kind.cjs');

const flagHandlerKind = kind.createCleanKind("flag-handler");
const flagKind = kind.createCleanKind("flag");
function createFlag(name) {
    return flagHandlerKind.setTo({
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
                && flagKind.getValue(entity)[name] !== undefined;
        },
    });
}

exports.createFlag = createFlag;
exports.flagKind = flagKind;
