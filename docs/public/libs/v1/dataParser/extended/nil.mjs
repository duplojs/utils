import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../base.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { nil as nil$1 } from '../parsers/nil.mjs';
import '../../pattern/result.mjs';

function nil(definition) {
    return dataParserExtendedInit(nil$1(definition), {});
}

export { nil };
