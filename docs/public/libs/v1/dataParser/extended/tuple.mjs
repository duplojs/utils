import { DataParserBaseExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { DataParserTuple } from '../parsers/tuple.mjs';
import { checkerArrayMin } from '../parsers/array/checkers/min.mjs';
import { checkerArrayMax } from '../parsers/array/checkers/max.mjs';

class DataParserTupleExtended extends DataParserBaseExtended.initExtended(DataParserTuple) {
    get classConstructor() {
        return this.checkConstructor(DataParserTupleExtended);
    }
    /**
     * {@include dataParser/extended/tuple/min/index.md}
     */
    min(min, definition) {
        return this.addChecker(checkerArrayMin(min, definition));
    }
    /**
     * {@include dataParser/extended/tuple/max/index.md}
     */
    max(max, definition) {
        return this.addChecker(checkerArrayMax(max, definition));
    }
    /**
     * {@include dataParser/extended/tuple/rest/index.md}
     */
    rest(dataParser) {
        return tuple(this.definition.shape, {
            ...this.definition,
            rest: dataParser,
        });
    }
    /**
     * {@include dataParser/extended/tuple/index.md}
     */
    static create(shape, definition) {
        return new DataParserTupleExtended(this.prepareDefinition(shape, definition));
    }
}
/**
 * {@include dataParser/extended/tuple/index.md}
 */
const tuple = detachObjectMethod(DataParserTupleExtended, "create");

export { DataParserTupleExtended, tuple };
