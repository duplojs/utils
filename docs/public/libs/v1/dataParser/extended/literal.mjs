import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserLiteral } from '../parsers/literal.mjs';

class DataParserLiteralExtended extends DataParserBaseExtended.initExtended(DataParserLiteral) {
    get classConstructor() {
        return this.checkConstructor(DataParserLiteralExtended);
    }
    /**
     * {@include dataParser/extended/literal/index.md}
     */
    static create(value, definition) {
        return new DataParserLiteralExtended(this.prepareDefinition(value, definition));
    }
}
const literal = detachObjectMethod(DataParserLiteralExtended, "create");

export { DataParserLiteralExtended, literal };
