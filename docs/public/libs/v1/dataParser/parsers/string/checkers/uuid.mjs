import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { string } from '../index.mjs';
import { DataParserCheckerBase } from '../../../baseChecker.mjs';
import { detachObjectMethod } from '../../../../common/detachObjectMethod.mjs';

const checkerUuidKind = createDataParserKind("checker-uuid");
const uuidRegex = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
class DataParserCheckerUuid extends DataParserCheckerBase.init(checkerUuidKind) {
    get classConstructor() {
        return this.checkConstructor(DataParserCheckerUuid);
    }
    isAsynchronous() {
        return false;
    }
    static execCheck(data, error, self, dataParser) {
        return uuidRegex.test(data)
            ? data
            : addIssue(error, "uuid", data, self.definition.errorMessage ?? dataParser.definition.errorMessage);
    }
    static create(definition = {}) {
        return new DataParserCheckerUuid({
            ...definition,
            regex: uuidRegex,
        });
    }
}
const checkerUuid = detachObjectMethod(DataParserCheckerUuid, "create");
/**
 * {@include dataParser/classic/uuid/index.md}
 */
function uuid(definition) {
    return string({
        checkers: [checkerUuid(definition)],
    });
}

export { DataParserCheckerUuid, checkerUuid, checkerUuidKind, uuid };
