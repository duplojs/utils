import { object } from './index.mjs';
import { optionalKind, optional } from '../optional.mjs';
import { identifier } from '../../identifier.mjs';
import { forward } from '../../../common/forward.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { map } from '../../../array/map.mjs';
import { whenIsRight } from '../../../either/right/when.mjs';
import { whenIsLeft } from '../../../either/left/when.mjs';
import { entry } from '../../../object/entry.mjs';
import { entries } from '../../../object/entries.mjs';
import { fromEntries } from '../../../object/fromEntries.mjs';

function partialShape(shape) {
    return pipe(shape, entries, map(([key, dataParser]) => pipe(identifier(dataParser, optionalKind), whenIsRight(forward), whenIsLeft(optional), (dataParser) => entry(key, dataParser))), fromEntries);
}
function partial(dataParser, definition) {
    const newShape = partialShape(dataParser.definition.shape);
    return object(newShape, definition);
}

export { partial, partialShape };
