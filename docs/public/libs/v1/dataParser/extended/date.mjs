import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserDate } from '../parsers/date.mjs';

class DataParserDateExtended extends DataParserBaseExtended.initExtended(DataParserDate) {
    get classConstructor() {
        return this.checkConstructor(DataParserDateExtended);
    }
    /**
     * {@include dataParser/extended/date/index.md}
     */
    static create(definition) {
        return new DataParserDateExtended(this.prepareDefinition(definition));
    }
}
/**
 * {@include dataParser/extended/date/index.md}
 */
const date = detachObjectMethod(DataParserDateExtended, "create");

export { DataParserDateExtended, date };
