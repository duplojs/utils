import { dataParserCheckerInit } from '../../../base.mjs';
import { addIssue } from '../../../error.mjs';
import { createDataParserKind } from '../../../kind.mjs';
import { string } from '../index.mjs';

const checkerUuidKind = createDataParserKind("checker-uuid");
const uuidRegex = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
function checkerUuid(definition = {}) {
    return dataParserCheckerInit(checkerUuidKind, {
        definition: {
            ...definition,
            regex: uuidRegex,
        },
    }, (data, error, self) => uuidRegex.test(data)
        ? data
        : addIssue(error, "uuid", data, self.definition.errorMessage));
}
/**
 * {@include dataParser/classic/uuid/index.md}
 */
function uuid(definition) {
    return string({
        checkers: [checkerUuid(definition)],
    });
}

export { checkerUuid, checkerUuidKind, uuid };
