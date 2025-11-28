import '../string.mjs';
import '../array.mjs';
import '../bigint.mjs';
import '../number.mjs';
import '../date.mjs';
import '../transform.mjs';
import '../union.mjs';
import '../boolean.mjs';
import { empty as empty$1 } from '../empty.mjs';
import '../lazy.mjs';
import '../literal.mjs';
import '../nil.mjs';
import '../nullable.mjs';
import '../object.mjs';
import '../optional.mjs';
import '../pipe.mjs';
import '../record.mjs';
import '../templateLiteral.mjs';
import '../tuple.mjs';
import '../unknown.mjs';
import '../recover.mjs';
import '../../error.mjs';

function empty(definition) {
    return empty$1({
        ...definition,
        coerce: true,
    });
}

export { empty };
