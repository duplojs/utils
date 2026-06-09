import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserEmpty } from '../parsers/empty.mjs';

class DataParserEmptyExtended extends DataParserBaseExtended.initExtended(DataParserEmpty) {
    get classConstructor() {
        return this.checkConstructor(DataParserEmptyExtended);
    }
    /**
     * {@include dataParser/extended/empty/index.md}
     */
    static create(definition) {
        return new DataParserEmptyExtended(this.prepareDefinition(definition));
    }
}
const empty = detachObjectMethod(DataParserEmptyExtended, "create");

export { DataParserEmptyExtended, empty };
