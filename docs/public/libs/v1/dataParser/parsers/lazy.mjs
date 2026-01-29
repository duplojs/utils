import { dataParserInit } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';
import { memo } from '../../common/memo.mjs';
import { createOverride } from '../../common/override.mjs';

const lazyKind = createDataParserKind("lazy");
/**
 * {@include dataParser/classic/lazy/index.md}
 */
function lazy(getter, definition) {
    const self = dataParserInit(lazyKind, {
        errorMessage: definition?.errorMessage,
        checkers: definition?.checkers ?? [],
        getter: memo(getter),
    }, {
        sync: (data, _error, self) => self.definition.getter.value.exec(data, _error),
        async: (data, _error, self) => self.definition.getter.value.asyncExec(data, _error),
        isAsynchronous: (self) => self.definition.getter.value.isAsynchronous(),
    }, lazy.overrideHandler);
    return self;
}
lazy.overrideHandler = createOverride("@duplojs/utils/data-parser/lazy");

export { lazy, lazyKind };
