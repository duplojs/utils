import { dataParserInit } from '../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
import { createOverride } from '../../../common/override.mjs';

const bigIntKind = createDataParserKind("bigint");
function bigint(definition) {
    const self = dataParserInit(bigIntKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, _error, self) => {
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
        return SymbolDataParserErrorIssue;
    });
    return bigint.overrideHandler.apply(self);
}
bigint.overrideHandler = createOverride("@duplojs/utils/data-parser/bigint");

export { bigIntKind, bigint };
