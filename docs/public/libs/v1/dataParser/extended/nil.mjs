import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserNil } from '../parsers/nil.mjs';

class DataParserNilExtended extends DataParserBaseExtended.initExtended(DataParserNil) {
    get classConstructor() {
        return this.checkConstructor(DataParserNilExtended);
    }
    /**
     * {@include dataParser/extended/nil/index.md}
     */
    static create(definition) {
        return new DataParserNilExtended(this.prepareDefinition(definition));
    }
}
/**
 * {@include dataParser/extended/nil/index.md}
 */
const nil = detachObjectMethod(DataParserNilExtended, "create");

export { DataParserNilExtended, nil };
