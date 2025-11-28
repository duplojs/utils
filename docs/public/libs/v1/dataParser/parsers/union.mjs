import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import '../../either/bool/falsy.mjs';
import '../../either/bool/truthy.mjs';
import '../../either/bool/base.mjs';
import '../../either/left/create.mjs';
import '../../either/left/error.mjs';
import '../../either/left/fail.mjs';
import '../../either/kind.mjs';
import '../../either/right/success.mjs';
import '../../either/right/create.mjs';
import '../../either/right/ok.mjs';
import '../../either/future/success.mjs';
import '../../either/future/error.mjs';
import '../../either/future/base.mjs';
import '../../either/nullable/empty.mjs';
import '../../either/nullable/filled.mjs';
import '../../either/nullable/base.mjs';
import '../../either/nullish/empty.mjs';
import '../../either/nullish/filled.mjs';
import '../../either/nullish/base.mjs';
import '../../either/optional/empty.mjs';
import '../../either/optional/filled.mjs';
import '../../either/optional/base.mjs';
import { createOverride } from '../../common/override.mjs';
import { dataParserInit, SymbolDataParserError } from '../base.mjs';
import { SymbolDataParserErrorIssue } from '../error.mjs';
import { createDataParserKind } from '../kind.mjs';

const unionKind = createDataParserKind("union");
function union(options, definition) {
    const self = dataParserInit(unionKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            options,
        },
    }, {
        sync: (data, error, self) => {
            for (const dataParser of self.definition.options) {
                const result = dataParser.exec(data, error);
                if (result !== SymbolDataParserError) {
                    return result;
                }
            }
            return SymbolDataParserErrorIssue;
        },
        async: async (data, error, self) => {
            for (const dataParser of self.definition.options) {
                const result = await dataParser.asyncExec(data, error);
                if (result !== SymbolDataParserError) {
                    return result;
                }
            }
            return SymbolDataParserErrorIssue;
        },
    });
    return union.overrideHandler.apply(self);
}
union.overrideHandler = createOverride("@duplojs/utils/data-parser/union");

export { union, unionKind };
