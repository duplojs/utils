import { memo } from '../../common/memo.mjs';
import '../../common/globalStore.mjs';
import '../../common/builder.mjs';
import { dataParserInit } from '../base.mjs';
import { createDataParserKind } from '../kind.mjs';

const lazyKind = createDataParserKind("lazy");
function lazy(getter, definition) {
    return dataParserInit(lazyKind, {
        definition: {
            errorMessage: definition?.errorMessage,
            checkers: definition?.checkers ?? [],
            getter: memo(getter),
        },
    }, {
        sync: (data, _error, self) => self.definition.getter.value.exec(data, _error),
        async: (data, _error, self) => self.definition.getter.value.asyncExec(data, _error),
    });
}

export { lazy, lazyKind };
