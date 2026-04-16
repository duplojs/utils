import { entityKind } from './entity/index.mjs';
import { createCleanKind } from './kind.mjs';
import { pipe } from '../common/pipe.mjs';
import { createOverride } from '../common/override.mjs';

const flagHandlerKind = createCleanKind("flag-handler");
const flagKind = createCleanKind("flag");
/**
 * {@include clean/createFlag/index.md}
 */
function createFlag(name) {
    function append(maybeEntity, value) {
        if (!entityKind.has(maybeEntity)) {
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
    return pipe({
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
createFlag.overrideHandler = createOverride("@duplojs/utils/clean/flag");

export { createFlag, flagKind };
