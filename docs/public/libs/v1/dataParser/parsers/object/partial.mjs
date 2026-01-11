import { object } from './index.mjs';
import { optionalKind, optional } from '../optional.mjs';
import { identifier } from '../../identifier.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { map } from '../../../array/map.mjs';
import { whenNot } from '../../../common/whenNot.mjs';
import { entry } from '../../../object/entry.mjs';
import { entries } from '../../../object/entries.mjs';
import { fromEntries } from '../../../object/fromEntries.mjs';

function partialShape(shape) {
    return pipe(shape, entries, map(([key, dataParser]) => pipe(dataParser, whenNot(identifier(optionalKind), optional), (dataParser) => entry(key, dataParser))), fromEntries);
}
/**
 * {@include dataParser/classic/object/partial/index.md}
 */
function partial(dataParser, definition) {
    const newShape = partialShape(dataParser.definition.shape);
    return object(newShape, definition);
}

export { partial, partialShape };
