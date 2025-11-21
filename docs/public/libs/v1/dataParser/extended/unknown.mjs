import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../base.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../../pattern/result.mjs';
import { unknown as unknown$1 } from '../parsers/unknown.mjs';

function unknown(definition) {
    return dataParserExtendedInit(unknown$1(definition), {});
}

export { unknown };
