import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserBoolean } from '../parsers/boolean.mjs';

class DataParserBooleanExtended extends DataParserBaseExtended.initExtended(DataParserBoolean) {
    get classConstructor() {
        return this.checkConstructor(DataParserBooleanExtended);
    }
    /**
     * {@include dataParser/extended/boolean/index.md}
     */
    static create(definition) {
        return new DataParserBooleanExtended(this.prepareDefinition(definition));
    }
}
/**
 * {@include dataParser/extended/boolean/index.md}
 */
const boolean = detachObjectMethod(DataParserBooleanExtended, "create");

export { DataParserBooleanExtended, boolean };
