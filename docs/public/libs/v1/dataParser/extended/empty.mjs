import { dataParserExtendedInit } from '../baseExtended.mjs';
import { empty as empty$1 } from '../parsers/empty.mjs';
import '../../pattern/result.mjs';

function empty(definition) {
    return dataParserExtendedInit(empty$1(definition), {});
}

export { empty };
