import { dataParserBaseInit } from '../../base.mjs';
import { addIssue } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
import { createOverride } from '../../../common/override.mjs';

const bigIntKind = createDataParserKind("bigint");
/**
 * {@include dataParser/classic/bigint/index.md}
 */
function bigint(definition) {
    const self = dataParserBaseInit(bigIntKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, error, self) => {
        const inputData = data;
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = BigInt(data);
            }
            catch { }
        }
        if (typeof data === "bigint") {
            return data;
        }
        return addIssue(error, "bigint", inputData, self.definition.errorMessage);
    }, bigint.overrideHandler);
    return self;
}
bigint.overrideHandler = createOverride("@duplojs/utils/data-parser/bigint");

export { bigIntKind, bigint };
