import { object } from './index.mjs';
import { optionalKind } from '../optional.mjs';
import { identifier } from '../../identifier.mjs';
import { forward } from '../../../common/forward.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { map } from '../../../array/map.mjs';
import { when } from '../../../common/when.mjs';
import { whenIsLeft } from '../../../either/left/when.mjs';
import { entry } from '../../../object/entry.mjs';
import { entries } from '../../../object/entries.mjs';
import { fromEntries } from '../../../object/fromEntries.mjs';

function requiredShape(shape) {
    return pipe(shape, entries, map(([key, dataParser]) => pipe(dataParser, when(identifier(optionalKind), (dataParser) => dataParser.definition.inner), whenIsLeft(forward), (dataParser) => entry(key, dataParser))), fromEntries);
}
function required(dataParser, definition) {
    const newShape = requiredShape(dataParser.definition.shape);
    return object(newShape, definition);
}

export { required, requiredShape };
