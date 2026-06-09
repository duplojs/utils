import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserUnknown } from '../parsers/unknown.mjs';

class DataParserUnknownExtended extends DataParserBaseExtended.initExtended(DataParserUnknown) {
    get classConstructor() {
        return this.checkConstructor(DataParserUnknownExtended);
    }
    /**
     * {@include dataParser/extended/unknown/index.md}
     */
    static create(definition) {
        return new DataParserUnknownExtended(this.prepareDefinition(definition));
    }
}
const unknown = detachObjectMethod(DataParserUnknownExtended, "create");

export { DataParserUnknownExtended, unknown };
