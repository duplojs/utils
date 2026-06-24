import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserTime } from '../parsers/time/index.mjs';
import { checkerTimeMin } from '../parsers/time/checkers/min.mjs';
import { checkerTimeMax } from '../parsers/time/checkers/max.mjs';

class DataParserTimeExtended extends DataParserBaseExtended.initExtended(DataParserTime) {
    get classConstructor() {
        return this.checkConstructor(DataParserTimeExtended);
    }
    /**
     * {@include dataParser/extended/time/min/index.md}
     */
    min(min, definition) {
        return this.addChecker(checkerTimeMin(min, definition));
    }
    /**
     * {@include dataParser/extended/time/max/index.md}
     */
    max(max, definition) {
        return this.addChecker(checkerTimeMax(max, definition));
    }
    /**
     * {@include dataParser/extended/time/index.md}
     */
    static create(definition) {
        return new DataParserTimeExtended(this.prepareDefinition(definition));
    }
}
/**
 * {@include dataParser/extended/time/index.md}
 */
const time = detachObjectMethod(DataParserTimeExtended, "create");

export { DataParserTimeExtended, time };
