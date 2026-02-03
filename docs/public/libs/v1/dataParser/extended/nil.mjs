import { dataParserExtendedInit } from '../baseExtended.mjs';
import { nil as nil$1 } from '../parsers/nil.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/nil/index.md}
 */
function nil(definition) {
    const self = dataParserExtendedInit(nil$1(definition), {}, nil.overrideHandler);
    return self;
}
nil.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/nil");

export { nil };
