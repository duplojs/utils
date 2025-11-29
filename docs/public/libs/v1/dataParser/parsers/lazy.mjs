import '../../common/stringToBytes.mjs';
import '../../common/stringToMillisecond.mjs';
import { memo } from '../../common/memo.mjs';
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
import { dataParserInit } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';

const lazyKind = createDataParserKind("lazy");
function lazy(getter, definition) {
    const self = dataParserInit(lazyKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            getter: memo(getter),
        },
    }, {
        sync: (data, _error, self) => self.definition.getter.value.exec(data, _error),
        async: (data, _error, self) => self.definition.getter.value.asyncExec(data, _error),
    });
    return lazy.overrideHandler.apply(self);
}
lazy.overrideHandler = createOverride("@duplojs/utils/data-parser/lazy");

export { lazy, lazyKind };
