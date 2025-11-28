import '../string/index.mjs';
import '../object/index.mjs';
import { number as number$1 } from '../number/index.mjs';
import '../date.mjs';
import '../literal.mjs';
import '../union.mjs';
import '../array/index.mjs';
import '../bigint/index.mjs';
import '../tuple.mjs';
import '../transform.mjs';
import '../nil.mjs';
import '../boolean.mjs';
import '../empty.mjs';
import '../templateLiteral/index.mjs';
import '../pipe.mjs';
import '../optional.mjs';
import '../nullable.mjs';
import '../lazy.mjs';
import '../unknown.mjs';
import '../record/index.mjs';
import '../refine.mjs';
import '../recover.mjs';

function number(definition) {
    return number$1({
        ...definition,
        coerce: true,
    });
}

export { number };
