'use strict';

var kind = require('../kind.cjs');
var base = require('../base.cjs');
var kindClass = require('../../common/kindClass.cjs');
var refine = require('../parsers/refine.cjs');
var index = require('../parsers/array/index.cjs');
var min = require('../parsers/array/checkers/min.cjs');
var max = require('../parsers/array/checkers/max.cjs');
var transform = require('../parsers/transform.cjs');
var union = require('../parsers/union.cjs');
var pipe = require('../parsers/pipe.cjs');
var nullable = require('../parsers/nullable.cjs');
var optional = require('../parsers/optional.cjs');
var recover = require('../parsers/recover.cjs');

const dataParserExtendedKind = kind.createDataParserKind("extended");
class DataParserBaseExtended extends kindClass.kindClass(dataParserExtendedKind, base.DataParserBase) {
    constructor(definition) {
        super(null, definition);
    }
    contractExtended(...args) {
        return this;
    }
    refine(theFunction, definition) {
        return this.addChecker(refine.checkerRefine(theFunction, definition));
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
        class _DataParserBaseExtendedInit extends kindClass.kindClass(dataParserConstructor.specificKindHandler, DataParserBaseExtended) {
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
class DataParserArrayExtended extends DataParserBaseExtended.initExtended(index.DataParserArray) {
    get classConstructor() {
        return this.checkConstructor(DataParserArrayExtended);
    }
    /**
     * {@include dataParser/extended/array/min/index.md}
     */
    min(min$1, definition) {
        return this.addChecker(min.checkerArrayMin(min$1, definition));
    }
    /**
     * {@include dataParser/extended/array/max/index.md}
     */
    max(max$1, definition) {
        return this.addChecker(max.checkerArrayMax(max$1, definition));
    }
    /**
     * {@include dataParser/extended/array/index.md}
     */
    static create(element, definition) {
        return new DataParserArrayExtended(this.prepareDefinition(element, definition));
    }
}
class DataParserTransformExtended extends DataParserBaseExtended.initExtended(transform.DataParserTransform) {
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
class DataParserUnionExtended extends DataParserBaseExtended.initExtended(union.DataParserUnion) {
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
class DataParserPipeExtended extends DataParserBaseExtended.initExtended(pipe.DataParserPipe) {
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
class DataParserNullableExtended extends DataParserBaseExtended.initExtended(nullable.DataParserNullable) {
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
class DataParserOptionalExtended extends DataParserBaseExtended.initExtended(optional.DataParserOptional) {
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
class DataParserRecoverExtended extends DataParserBaseExtended.initExtended(recover.DataParserRecover) {
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

exports.DataParserArrayExtended = DataParserArrayExtended;
exports.DataParserBaseExtended = DataParserBaseExtended;
exports.DataParserNullableExtended = DataParserNullableExtended;
exports.DataParserOptionalExtended = DataParserOptionalExtended;
exports.DataParserPipeExtended = DataParserPipeExtended;
exports.DataParserRecoverExtended = DataParserRecoverExtended;
exports.DataParserTransformExtended = DataParserTransformExtended;
exports.DataParserUnionExtended = DataParserUnionExtended;
exports.dataParserExtendedKind = dataParserExtendedKind;
