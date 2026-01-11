import { object } from './index.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { filter } from '../../../array/filter.mjs';
import { isKeyof } from '../../../string/isKeyof.mjs';
import { entries } from '../../../object/entries.mjs';
import { fromEntries } from '../../../object/fromEntries.mjs';

function pickShape(shape, pickObject) {
    return pipe(shape, entries, filter(([key]) => isKeyof(key, pickObject)), fromEntries);
}
/**
 * {@include dataParser/classic/object/pick/index.md}
 */
function pick(dataParser, pickObject, definition) {
    const newShape = pickShape(dataParser.definition.shape, pickObject);
    return object(newShape, definition);
}

export { pick, pickShape };
