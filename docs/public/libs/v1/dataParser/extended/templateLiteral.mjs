import { dataParserExtendedInit } from '../baseExtended.mjs';
import { templateLiteral as templateLiteral$1 } from '../parsers/templateLiteral/index.mjs';
import { createOverride } from '../../common/override.mjs';

/**
 * {@include dataParser/extended/templateLiteral/index.md}
 */
function templateLiteral(template, definition) {
    const self = dataParserExtendedInit(templateLiteral$1(template, definition), {}, templateLiteral.overrideHandler);
    return self;
}
templateLiteral.overrideHandler = createOverride("@duplojs/utils/data-parser-extended/templateLiteral");

export { templateLiteral };
