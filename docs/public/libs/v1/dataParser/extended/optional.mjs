import { dataParserExtendedInit } from '../baseExtended.mjs';
import { optional as optional$1 } from '../parsers/optional.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/optional/index.md}
 */
function optional(inner, definition) {
    const self = dataParserExtendedInit(optional$1(inner, definition), {
        default: (self, value) => optional(self.definition.inner, {
            ...self.definition,
            coalescingValue: value,
        }),
    }, optional.overrideHandler);
    return self;
}
optional.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/optional");

export { optional };
