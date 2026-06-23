import { createDataParserKind } from '../kind.mjs';
import { DataParserBase } from '../base.mjs';
import { addIssue } from '../error.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

const booleanKind = createDataParserKind("boolean");
class DataParserBoolean extends DataParserBase.init(booleanKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserBoolean);
    }
    static execParse(self, data, error) {
        if (typeof data === "boolean") {
            return data;
        }
        else if (self.definition.coerce) {
            if (typeof data === "string") {
                const lower = data.trim().toLowerCase();
                if (lower === "true" || lower === "false") {
                    return lower === "true";
                }
            }
            else if (typeof data === "number" && (data === 0 || data === 1)) {
                return data === 1;
            }
        }
        return addIssue(error, "boolean", data, self.definition.errorMessage, self);
    }
    static dataParserIsAsynchronous(self) {
        return false;
    }
    static prepareDefinition(definition) {
        return {
            ...definition,
            coerce: definition?.coerce ?? false,
            checkers: definition?.checkers ?? [],
            errorMessage: definition?.errorMessage,
        };
    }
    /**
     * {@include dataParser/classic/boolean/index.md}
     */
    static create(definition) {
        return new DataParserBoolean(this.prepareDefinition(definition));
    }
}
const boolean = detachObjectMethod(DataParserBoolean, "create");

export { DataParserBoolean, boolean, booleanKind };
