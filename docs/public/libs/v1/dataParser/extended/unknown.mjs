import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../parsers/string/index.mjs';
import '../parsers/object.mjs';
import '../parsers/number/index.mjs';
import '../parsers/date.mjs';
import '../parsers/literal.mjs';
import '../parsers/union.mjs';
import '../parsers/array/index.mjs';
import '../parsers/bigint/index.mjs';
import '../parsers/tuple.mjs';
import '../parsers/transform.mjs';
import '../parsers/nil.mjs';
import '../parsers/boolean.mjs';
import '../parsers/empty.mjs';
import '../parsers/templateLiteral/index.mjs';
import '../parsers/pipe.mjs';
import '../parsers/optional.mjs';
import '../parsers/nullable.mjs';
import '../parsers/lazy.mjs';
import { unknown as unknown$1 } from '../parsers/unknown.mjs';
import '../parsers/record/index.mjs';
import '../parsers/refine.mjs';
import '../parsers/recover.mjs';

function unknown(definition) {
    return dataParserExtendedInit(unknown$1(definition), {});
}

export { unknown };
