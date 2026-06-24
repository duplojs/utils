import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserBigInt } from '../parsers/bigint/index.mjs';
import { checkerBigIntMin } from '../parsers/bigint/checkers/min.mjs';
import { checkerBigIntMax } from '../parsers/bigint/checkers/max.mjs';

class DataParserBigIntExtended extends DataParserBaseExtended.initExtended(DataParserBigInt) {
    get classConstructor() {
        return this.checkConstructor(DataParserBigIntExtended);
    }
    /**
     * {@include dataParser/extended/bigint/min/index.md}
     */
    min(min, definition) {
        return this.addChecker(checkerBigIntMin(min, definition));
    }
    /**
     * {@include dataParser/extended/bigint/max/index.md}
     */
    max(max, definition) {
        return this.addChecker(checkerBigIntMax(max, definition));
    }
    /**
     * {@include dataParser/extended/bigint/index.md}
     */
    static create(definition) {
        return new DataParserBigIntExtended(this.prepareDefinition(definition));
    }
}
/**
 * {@include dataParser/extended/bigint/index.md}
 */
const bigint = detachObjectMethod(DataParserBigIntExtended, "create");

export { DataParserBigIntExtended, bigint };
