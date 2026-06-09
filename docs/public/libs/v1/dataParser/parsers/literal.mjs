import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { addIssue } from '../error.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';
import { coalescing } from '../../array/coalescing.mjs';

const literalKind = createDataParserKind("literal");
class DataParserLiteral extends DataParserBase.init(literalKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserLiteral);
    }
    static execParse(self, data, error) {
        if (self.definition.value.includes(data)) {
            return data;
        }
        return addIssue(error, `one of ${self.definition.value.join(", ")}`, data, self.definition.errorMessage);
    }
    static dataParserIsAsynchronous(self) {
        return false;
    }
    static prepareDefinition(value, definition) {
        return {
            ...definition,
            value: coalescing(value),
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/literal/index.md}
     */
    static create(value, definition) {
        return new DataParserLiteral(this.prepareDefinition(value, definition));
    }
}
const literal = detachObjectMethod(DataParserLiteral, "create");

export { DataParserLiteral, literal, literalKind };
