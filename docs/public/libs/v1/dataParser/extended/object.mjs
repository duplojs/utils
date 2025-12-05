import { dataParserExtendedInit } from '../baseExtended.mjs';
import { object as object$1 } from '../parsers/object/index.mjs';
import { pipe } from '../../common/pipe.mjs';
import { fromEntries } from '../../object/fromEntries.mjs';
import { filter } from '../../array/filter.mjs';
import { isKeyof } from '../../string/isKeyof.mjs';
import { entries } from '../../object/entries.mjs';
import { createOverride } from '../../common/override.mjs';

function object(shape, definition) {
    const self = dataParserExtendedInit(object$1(shape, definition), {
        omit: (self, omitObject, definition) => {
            const newShape = pipe(self.definition.shape, entries, filter(([key]) => !isKeyof(key, omitObject)), fromEntries);
            return object(newShape, definition);
        },
        pick: (self, omitObject, definition) => {
            const newShape = pipe(self.definition.shape, entries, filter(([key]) => isKeyof(key, omitObject)), fromEntries);
            return object(newShape, definition);
        },
    });
    return object.overrideHandler.apply(self);
}
object.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/object");

export { object };
