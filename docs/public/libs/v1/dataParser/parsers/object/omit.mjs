import { object } from './index.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { filter } from '../../../array/filter.mjs';
import { isKeyof } from '../../../string/isKeyof.mjs';
import { entries } from '../../../object/entries.mjs';
import { fromEntries } from '../../../object/fromEntries.mjs';

function omitShape(shape, omitObject) {
    return pipe(shape, entries, filter(([key]) => !isKeyof(key, omitObject)), fromEntries);
}
function omit(dataParser, omitObject, definition) {
    const newShape = omitShape(dataParser.definition.shape, omitObject);
    return object(newShape, definition);
}

export { omit, omitShape };
