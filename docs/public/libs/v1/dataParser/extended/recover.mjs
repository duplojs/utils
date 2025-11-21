import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../base.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../../pattern/result.mjs';
import { recover as recover$1 } from '../parsers/recover.mjs';

function recover(inner, recoveredValue, definition) {
    return dataParserExtendedInit(recover$1(inner, recoveredValue, definition), {});
}

export { recover };
