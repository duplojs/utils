import { dataParserExtendedInit } from '../baseExtended.mjs';
import { templateLiteral as templateLiteral$1 } from '../parsers/templateLiteral.mjs';

function templateLiteral(template, definition) {
    return dataParserExtendedInit(templateLiteral$1(template, definition), {});
}

export { templateLiteral };
