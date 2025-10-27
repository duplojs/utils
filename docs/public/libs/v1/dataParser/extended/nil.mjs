import { dataParserExtendedInit } from '../baseExtended.mjs';
import { nil as nil$1 } from '../parsers/nil.mjs';
import '../../pattern/result.mjs';

function nil(definition) {
    return dataParserExtendedInit(nil$1(definition), {});
}

export { nil };
