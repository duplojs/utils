import { dataParserExtendedInit } from '../baseExtended.mjs';
import '../base.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { templateLiteral as templateLiteral$1 } from '../parsers/templateLiteral/index.mjs';
import '../../pattern/result.mjs';

function templateLiteral(template, definition) {
    return dataParserExtendedInit(templateLiteral$1(template, definition), {});
}

export { templateLiteral };
