import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserLazy } from '../parsers/lazy.mjs';

class DataParserLazyExtended extends DataParserBaseExtended.initExtended(DataParserLazy) {
    get classConstructor() {
        return this.checkConstructor(DataParserLazyExtended);
    }
    /**
     * {@include dataParser/extended/lazy/index.md}
     */
    static create(getter, definition) {
        return new DataParserLazyExtended(this.prepareDefinition(getter, definition));
    }
}
/**
 * {@include dataParser/extended/lazy/index.md}
 */
const lazy = detachObjectMethod(DataParserLazyExtended, "create");

export { DataParserLazyExtended, lazy };
