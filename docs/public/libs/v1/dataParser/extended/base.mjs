import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { kindClass } from '../../common/kindClass.mjs';
import { checkerRefine } from '../parsers/refine.mjs';
import { DataParserArray } from '../parsers/array/index.mjs';
import { checkerArrayMin } from '../parsers/array/checkers/min.mjs';
import { checkerArrayMax } from '../parsers/array/checkers/max.mjs';
import { DataParserTransform } from '../parsers/transform.mjs';
import { DataParserUnion } from '../parsers/union.mjs';
import { DataParserPipe } from '../parsers/pipe.mjs';
import { DataParserNullable } from '../parsers/nullable.mjs';
import { DataParserOptional } from '../parsers/optional.mjs';
import { DataParserRecover } from '../parsers/recover.mjs';

const dataParserExtendedKind = createDataParserKind("extended");
class DataParserBaseExtended extends kindClass(dataParserExtendedKind, DataParserBase) {
    constructor(definition) {
        super(null, definition);
    }
    contractExtended(...args) {
        return this;
    }
    refine(theFunction, definition) {
        return this.addChecker(checkerRefine(theFunction, definition));
    }
    /**
     * {@include dataParser/extended/base/array/index.md}
     */
    array(definition) {
        return DataParserArrayExtended.create(this, definition);
    }
    /**
     * {@include dataParser/extended/base/transform/index.md}
     */
    transform(theFunction, definition) {
        return DataParserTransformExtended.create(this, theFunction, definition);
    }
    /**
     * {@include dataParser/extended/base/arrayCoalescing/index.md}
     */
    arrayCoalescing(definition) {
        return DataParserUnionExtended.create([
            this.array(),
            this.transform((data) => [data]),
        ], definition);
    }
    /**
     * {@include dataParser/extended/base/pipe/index.md}
     */
    pipe(output, definition) {
        return DataParserPipeExtended.create(this, output, definition);
    }
    /**
     * {@include dataParser/extended/base/nullable/index.md}
     */
    nullable(definition) {
        return DataParserNullableExtended.create(this, definition);
    }
    /**
     * {@include dataParser/extended/base/optional/index.md}
     */
    optional(definition) {
        return DataParserOptionalExtended.create(this, definition);
    }
    /**
     * {@include dataParser/extended/base/or/index.md}
     */
    or(option, definition) {
        return DataParserUnionExtended.create([this, option], definition);
    }
    /**
     * {@include dataParser/extended/base/recover/index.md}
     */
    recover(recoveredValue, definition) {
        return DataParserRecoverExtended.create(this, recoveredValue, definition);
    }
    static initExtended(dataParserConstructor) {
        class _DataParserBaseExtendedInit extends kindClass(dataParserConstructor.specificKindHandler, DataParserBaseExtended) {
            constructor(definition) {
                super(null, definition);
            }
            checkConstructor(constructor) {
                return constructor;
            }
            static execParse = dataParserConstructor.execParse;
            static dataParserIsAsynchronous = dataParserConstructor.dataParserIsAsynchronous;
            static prepareDefinition = dataParserConstructor.prepareDefinition;
            static specificKindHandler = dataParserConstructor.specificKindHandler;
        }
        return _DataParserBaseExtendedInit;
    }
}
class DataParserArrayExtended extends DataParserBaseExtended.initExtended(DataParserArray) {
    get classConstructor() {
        return this.checkConstructor(DataParserArrayExtended);
    }
    /**
     * {@include dataParser/extended/array/min/index.md}
     */
    min(min, definition) {
        return this.addChecker(checkerArrayMin(min, definition));
    }
    /**
     * {@include dataParser/extended/array/max/index.md}
     */
    max(max, definition) {
        return this.addChecker(checkerArrayMax(max, definition));
    }
    /**
     * {@include dataParser/extended/array/index.md}
     */
    static create(element, definition) {
        return new DataParserArrayExtended(this.prepareDefinition(element, definition));
    }
}
class DataParserTransformExtended extends DataParserBaseExtended.initExtended(DataParserTransform) {
    get classConstructor() {
        return this.checkConstructor(DataParserTransformExtended);
    }
    /**
     * {@include dataParser/extended/transform/index.md}
     */
    static create(inner, theFunction, definition) {
        return new DataParserTransformExtended(this.prepareDefinition(inner, theFunction, definition));
    }
}
class DataParserUnionExtended extends DataParserBaseExtended.initExtended(DataParserUnion) {
    get classConstructor() {
        return this.checkConstructor(DataParserUnionExtended);
    }
    /**
     * {@include dataParser/extended/union/index.md}
     */
    static create(options, definition) {
        return new DataParserUnionExtended(this.prepareDefinition(options, definition));
    }
}
class DataParserPipeExtended extends DataParserBaseExtended.initExtended(DataParserPipe) {
    get classConstructor() {
        return this.checkConstructor(DataParserPipeExtended);
    }
    /**
     * {@include dataParser/extended/pipe/index.md}
     */
    static create(input, output, definition) {
        return new DataParserPipeExtended(this.prepareDefinition(input, output, definition));
    }
}
class DataParserNullableExtended extends DataParserBaseExtended.initExtended(DataParserNullable) {
    get classConstructor() {
        return this.checkConstructor(DataParserNullableExtended);
    }
    default(input) {
        return DataParserNullableExtended.create(this.definition.inner, {
            ...this.definition,
            coalescingValue: input,
        });
    }
    /**
     * {@include dataParser/extended/nullable/index.md}
     */
    static create(inner, definition) {
        return new DataParserNullableExtended(this.prepareDefinition(inner, definition));
    }
}
class DataParserOptionalExtended extends DataParserBaseExtended.initExtended(DataParserOptional) {
    get classConstructor() {
        return this.checkConstructor(DataParserOptionalExtended);
    }
    default(input) {
        return DataParserOptionalExtended.create(this.definition.inner, {
            ...this.definition,
            coalescingValue: input,
        });
    }
    /**
     * {@include dataParser/extended/optional/index.md}
     */
    static create(inner, definition) {
        return new DataParserOptionalExtended(this.prepareDefinition(inner, definition));
    }
}
class DataParserRecoverExtended extends DataParserBaseExtended.initExtended(DataParserRecover) {
    get classConstructor() {
        return this.checkConstructor(DataParserRecoverExtended);
    }
    /**
     * {@include dataParser/extended/recover/index.md}
     */
    static create(inner, recoveredValue, definition) {
        return new DataParserRecoverExtended(this.prepareDefinition(inner, recoveredValue, definition));
    }
}

export { DataParserArrayExtended, DataParserBaseExtended, DataParserNullableExtended, DataParserOptionalExtended, DataParserPipeExtended, DataParserRecoverExtended, DataParserTransformExtended, DataParserUnionExtended, dataParserExtendedKind };
