import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { object as object$1 } from '../parsers/object.mjs';
import '../../pattern/result.mjs';

function object(shape, definition) {
    return dataParserExtendedInit(object$1(shape, definition), {});
}

export { object };
