import { object } from './index.mjs';
import { optionalKind } from '../optional.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { fromEntries } from '../../../object/fromEntries.mjs';
import { map } from '../../../array/map.mjs';
import { entry } from '../../../object/entry.mjs';
import { entries } from '../../../object/entries.mjs';

function requiredShape(shape) {
    return pipe(shape, entries, map(([key, dataParser]) => entry(key, optionalKind.has(dataParser)
        ? dataParser.definition.inner
        : dataParser)), fromEntries);
}
/**
 * {@include dataParser/classic/object/required/index.md}
 */
function required(dataParser, definition) {
    const newShape = requiredShape(dataParser.definition.shape);
    return object(newShape, definition);
}

export { required, requiredShape };
