import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserNumber } from '../parsers/number/index.mjs';
import { checkerNumberMin } from '../parsers/number/checkers/min.mjs';
import { checkerNumberMax } from '../parsers/number/checkers/max.mjs';
import { checkerInt } from '../parsers/number/checkers/int.mjs';

class DataParserNumberExtended extends DataParserBaseExtended.initExtended(DataParserNumber) {
    get classConstructor() {
        return this.checkConstructor(DataParserNumberExtended);
    }
    /**
     * {@include dataParser/extended/number/min/index.md}
     */
    min(min, definition) {
        return this.addChecker(checkerNumberMin(min, definition));
    }
    /**
     * {@include dataParser/extended/number/max/index.md}
     */
    max(max, definition) {
        return this.addChecker(checkerNumberMax(max, definition));
    }
    /**
     * {@include dataParser/extended/number/int/index.md}
     */
    int(definition) {
        return this.addChecker(checkerInt(definition));
    }
    /**
     * {@include dataParser/extended/number/index.md}
     */
    static create(definition) {
        return new DataParserNumberExtended(this.prepareDefinition(definition));
    }
}
const number = detachObjectMethod(DataParserNumberExtended, "create");
/**
 * {@include dataParser/extended/int/index.md}
 */
function int(definition) {
    return number({ checkers: [checkerInt(definition)] });
}

export { DataParserNumberExtended, int, number };
