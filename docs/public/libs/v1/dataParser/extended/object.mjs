import { dataParserExtendedInit } from '../baseExtended.mjs';
import { object as object$1 } from '../parsers/object/index.mjs';
import { requiredShape } from '../parsers/object/required.mjs';
import { partialShape } from '../parsers/object/partial.mjs';
import { pickShape } from '../parsers/object/pick.mjs';
import { omitShape } from '../parsers/object/omit.mjs';
import { createOverride } from '../../common/override.mjs';

function object(shape, definition) {
    const self = dataParserExtendedInit(object$1(shape, definition), {
        omit: (self, omitObject, definition) => {
            const newShape = omitShape(self.definition.shape, omitObject);
            return object(newShape, definition);
        },
        pick: (self, pickObject, definition) => {
            const newShape = pickShape(self.definition.shape, pickObject);
            return object(newShape, definition);
        },
        partial: (self, definition) => {
            const newShape = partialShape(self.definition.shape);
            return object(newShape, definition);
        },
        required: (self, definition) => {
            const newShape = requiredShape(self.definition.shape);
            return object(newShape, definition);
        },
    });
    return object.overrideHandler.apply(self);
}
object.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/object");

export { object };
