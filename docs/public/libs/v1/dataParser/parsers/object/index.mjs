import { createDataParserKind } from '../../kind.mjs';
import { DataParserBase, dataParserKind } from '../../base.mjs';
import { addIssue, setErrorPath, SymbolDataParserError, popErrorPath } from '../../error.mjs';
import { memo } from '../../../common/memo.mjs';
import { forward } from '../../../common/forward.mjs';
import { detachObjectMethod } from '../../../common/detachObjectMethod.mjs';
import { callThen } from '../../../common/callThen.mjs';
import { pipe } from '../../../common/pipe.mjs';
import { map } from '../../../array/map.mjs';
import { filter } from '../../../array/filter.mjs';
import { entries } from '../../../object/entries.mjs';

const objectKind = createDataParserKind("object");
class DataParserObject extends DataParserBase.init(objectKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserObject);
    }
    static execParse(self, data, error) {
        if (!data
            || typeof data !== "object"
            || data instanceof Array) {
            return addIssue(error, "object", data, self.definition.errorMessage);
        }
        const currentIndexPath = error.currentPath.length;
        const output = self.definition.optimizedShape.value.reduce((accumulator, entry) => callThen(accumulator, (awaitedAccumulator) => {
            setErrorPath(error, entry.key, currentIndexPath);
            return callThen(entry.value.exec(data[entry.key], error), (awaitedResult) => {
                if (awaitedResult === SymbolDataParserError
                    || awaitedAccumulator === SymbolDataParserError) {
                    return SymbolDataParserError;
                }
                if (awaitedResult !== undefined) {
                    awaitedAccumulator[entry.key] = awaitedResult;
                }
                return awaitedAccumulator;
            });
        }), {});
        void (currentIndexPath !== error.currentPath.length && popErrorPath(error));
        return output;
    }
    static dataParserIsAsynchronous(self) {
        return self.definition.optimizedShape.value.some((entry) => entry.value.isAsynchronous());
    }
    static prepareDefinition(shape, definition) {
        return {
            ...definition,
            shape,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
            optimizedShape: memo(() => pipe(forward(shape), entries, filter((entry) => dataParserKind.has(entry[1])), map(([key, value]) => ({
                key,
                value,
            })))),
        };
    }
    /**
     * {@include dataParser/classic/object/index.md}
     */
    static create(shape, definition) {
        return new DataParserObject(this.prepareDefinition(shape, definition));
    }
}
const object = detachObjectMethod(DataParserObject, "create");

export { DataParserObject, object, objectKind };
