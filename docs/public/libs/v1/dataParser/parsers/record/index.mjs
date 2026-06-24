import { createDataParserKind } from '../../kind.mjs';
import { DataParserBase } from '../../base.mjs';
import { addIssue, setErrorPath, SymbolDataParserError, popErrorPath } from '../../error.mjs';
import { findRecordRequiredKey } from './findRecordRequiredKey.mjs';
export { findRecordRequiredKeyOnTemplateLiteralPart } from './findRecordRequiredKey.mjs';
import { detachObjectMethod } from '../../../common/detachObjectMethod.mjs';
import { callThen } from '../../../common/callThen.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { fromEntries } from '../../../object/fromEntries.mjs';
import { map } from '../../../array/map.mjs';
import { entry } from '../../../object/entry.mjs';

const recordKind = createDataParserKind("record");
class DataParserRecord extends DataParserBase.init(recordKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserRecord);
    }
    static execParse(self, data, error) {
        if (!data || typeof data !== "object" || data instanceof Array) {
            return addIssue(error, "record object", data, self.definition.errorMessage, self);
        }
        const fromData = {
            ...self.definition.baseData,
            ...data,
        };
        const entries = Object.entries(fromData);
        const currentIndexPath = error.currentPath.length;
        const output = entries.reduce((accumulator, entry) => callThen(accumulator, (awaitedAccumulator) => {
            setErrorPath(error, `(recordKey: ${entry[0]})`, currentIndexPath);
            return callThen(self.definition.key.exec(entry[0], error), (awaitedKeyResult) => {
                setErrorPath(error, `(recordValue: ${entry[0]})`, currentIndexPath);
                return callThen(self.definition.value.exec(entry[1], error), (awaitedValueResult) => {
                    if (awaitedAccumulator === SymbolDataParserError
                        || awaitedKeyResult === SymbolDataParserError
                        || awaitedValueResult === SymbolDataParserError) {
                        return SymbolDataParserError;
                    }
                    if (awaitedValueResult !== undefined) {
                        awaitedAccumulator[awaitedKeyResult] = awaitedValueResult;
                    }
                    return awaitedAccumulator;
                });
            });
        }), {});
        void (currentIndexPath !== error.currentPath.length && popErrorPath(error));
        return output;
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.key.isAsynchronous() || self.definition.value.isAsynchronous();
    }
    static prepareDefinition(key, value, definition) {
        const requireKey = findRecordRequiredKey(key);
        return {
            ...definition,
            key,
            value,
            baseData: pipe(requireKey, map((key) => entry(key, undefined)), fromEntries),
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/record/index.md}
     */
    static create(key, value, definition) {
        return new DataParserRecord(this.prepareDefinition(key, value, definition));
    }
}
/**
 * {@include dataParser/classic/record/index.md}
 */
const record = detachObjectMethod(DataParserRecord, "create");

export { DataParserRecord, findRecordRequiredKey, record, recordKind };
