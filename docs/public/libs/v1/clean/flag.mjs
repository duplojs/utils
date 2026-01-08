import { createCleanKind } from './kind.mjs';

const flagHandlerKind = createCleanKind("flag-handler");
const flagKind = createCleanKind("flag");
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

export { createFlag, flagKind };
