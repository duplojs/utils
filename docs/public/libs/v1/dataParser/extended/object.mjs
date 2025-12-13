import { dataParserExtendedInit } from '../baseExtended.mjs';
import { object as object$1 } from '../parsers/object/index.mjs';
import { required } from '../parsers/object/required.mjs';
import { partial } from '../parsers/object/partial.mjs';
import { pick } from '../parsers/object/pick.mjs';
import { omit } from '../parsers/object/omit.mjs';
import { createOverride } from '../../common/override.mjs';

function object(shape, definition) {
    const self = dataParserExtendedInit(object$1(shape, definition), {
        omit: (self, omitObject, definition) => omit(self, omitObject, definition),
        pick: (self, pickObject, definition) => pick(self, pickObject, definition),
        partial: (self, definition) => partial(self, definition),
        required: (self, definition) => required(self, definition),
    });
    return object.overrideHandler.apply(self);
}
object.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/object");

export { object };
