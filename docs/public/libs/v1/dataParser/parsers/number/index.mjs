import { dataParserInit } from '../../base.mjs';
import { SymbolDataParserErrorIssue } from '../../error.mjs';
import { createDataParserKind } from '../../kind.mjs';
import { createOverride } from '../../../common/override.mjs';

const numberKind = createDataParserKind("number");
/**
 * {@include dataParser/classic/number/index.md}
 */
function number(definition) {
    const self = dataParserInit(numberKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        coerce: definition?.coerce ?? false,
    }, (data, _error, self) => {
        if (self.definition.coerce) {
            try {
                // eslint-disable-next-line no-param-reassign
                data = Number(data);
            }
            catch { }
        }
        if (typeof data === "number" && !Number.isNaN(data)) {
            return data;
        }
        return SymbolDataParserErrorIssue;
    }, number.overrideHandler);
    return self;
}
number.overrideHandler = createOverride("@duplojs/utils/data-parser/number");

export { number, numberKind };
