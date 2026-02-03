import { createCleanKind } from './kind.mjs';
import { pipe } from '../common/pipe.mjs';
import { createOverride } from '../common/override.mjs';

const flagHandlerKind = createCleanKind("flag-handler");
const flagKind = createCleanKind("flag");
/**
 * {@include clean/createFlag/index.md}
 */
function createFlag(name) {
    return pipe({
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
createFlag.overrideHandler = createOverride("@duplojs/utils/clean/flag");

export { createFlag, flagKind };
