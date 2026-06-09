import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserRecord } from '../parsers/record/index.mjs';

class DataParserRecordExtended extends DataParserBaseExtended.initExtended(DataParserRecord) {
    get classConstructor() {
        return this.checkConstructor(DataParserRecordExtended);
    }
    /**
     * {@include dataParser/extended/record/index.md}
     */
    static create(key, value, definition) {
        return new DataParserRecordExtended(this.prepareDefinition(key, value, definition));
    }
}
const record = detachObjectMethod(DataParserRecordExtended, "create");

export { DataParserRecordExtended, record };
