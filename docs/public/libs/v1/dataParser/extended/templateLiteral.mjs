import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserTemplateLiteral } from '../parsers/templateLiteral/index.mjs';

class DataParserTemplateLiteralExtended extends DataParserBaseExtended.initExtended(DataParserTemplateLiteral) {
    get classConstructor() {
        return this.checkConstructor(DataParserTemplateLiteralExtended);
    }
    /**
     * {@include dataParser/extended/templateLiteral/index.md}
     */
    static create(template, definition) {
        return new DataParserTemplateLiteralExtended(this.prepareDefinition(template, definition));
    }
}
const templateLiteral = detachObjectMethod(DataParserTemplateLiteralExtended, "create");

export { DataParserTemplateLiteralExtended, templateLiteral };
