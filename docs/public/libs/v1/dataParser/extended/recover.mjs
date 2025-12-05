import { dataParserExtendedInit } from '../baseExtended.mjs';
import { recover as recover$1 } from '../parsers/recover.mjs';
import { createOverride } from '../../common/override.mjs';

function recover(inner, recoveredValue, definition) {
    const self = dataParserExtendedInit(recover$1(inner, recoveredValue, definition), {});
    return recover.overrideHandler.apply(self);
}
recover.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/recover");

export { recover };
