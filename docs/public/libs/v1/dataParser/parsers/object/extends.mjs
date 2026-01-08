import { object } from './index.mjs';
import { assign } from '../../../object/assign.mjs';

function extendsShape(shape, extension) {
    return assign(shape, extension);
}
function extend(dataParser, extension, definition) {
    const newShape = extendsShape(dataParser.definition.shape, extension);
    return object(newShape, definition);
}

export { extend as extends, extendsShape };
