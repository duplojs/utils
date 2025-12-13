import { object } from './index.mjs';
import { optionalKind } from '../optional.mjs';
import { identifier } from '../../identifier.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { map } from '../../../array/map.mjs';
import { whenIsRight } from '../../../either/right/when.mjs';
import { whenIsLeft } from '../../../either/left/when.mjs';
import { forward } from '../../../common/forward.mjs';
import { entry } from '../../../object/entry.mjs';
import { entries } from '../../../object/entries.mjs';
import { fromEntries } from '../../../object/fromEntries.mjs';

function required(dataParser, definition) {
    const newShape = pipe(dataParser.definition.shape, entries, map(([key, dataParser]) => pipe(identifier(dataParser, optionalKind), whenIsRight((dataParser) => dataParser.definition.inner), whenIsLeft(forward), (dataParser) => entry(key, dataParser))), fromEntries);
    return object(newShape, definition);
}

export { required };
