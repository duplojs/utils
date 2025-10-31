import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { boolean as boolean$1 } from '../parsers/boolean.mjs';
import '../../pattern/result.mjs';

function boolean(definition) {
    return dataParserExtendedInit(boolean$1(definition), {});
}

export { boolean };
