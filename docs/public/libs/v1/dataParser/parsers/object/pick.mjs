import { object } from './index.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { filter } from '../../../array/filter.mjs';
import { isKeyof } from '../../../string/isKeyof.mjs';
import { entries } from '../../../object/entries.mjs';
import { fromEntries } from '../../../object/fromEntries.mjs';

function pick(dataParser, omitObject, definition) {
    const newShape = pipe(dataParser.definition.shape, entries, filter(([key]) => isKeyof(key, omitObject)), fromEntries);
    return object(newShape, definition);
}

export { pick };
