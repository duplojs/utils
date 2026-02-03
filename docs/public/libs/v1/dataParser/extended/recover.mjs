import { dataParserExtendedInit } from '../baseExtended.mjs';
import { recover as recover$1 } from '../parsers/recover.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/recover/index.md}
 */
function recover(inner, recoveredValue, definition) {
    const self = dataParserExtendedInit(recover$1(inner, recoveredValue, definition), {}, recover.overrideHandler);
    return self;
}
recover.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/recover");

export { recover };
