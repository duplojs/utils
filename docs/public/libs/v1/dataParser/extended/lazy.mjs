import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../../pattern/result.mjs';
import { lazy as lazy$1 } from '../parsers/lazy.mjs';

function lazy(getter, definition) {
    return dataParserExtendedInit(lazy$1(getter, definition), {});
}

export { lazy };
