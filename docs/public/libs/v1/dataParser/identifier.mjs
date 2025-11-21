import '../common/globalStore.mjs';
import '../common/builder.mjs';
import { createKindIdentifier } from '../common/createKindIdentifier.mjs';

/**
 * Due to the recursive typing of `DataParsers`, it can’t be used without
 * causing an infinity error. You therefore have to go through the parent
 * type `DataParser`, which makes type discrimination impossible. That’s
 * why the `identifier` function was created. The function ensures that,
 * starting from the parent type and the kinds associated with the data
 * parsers, the correct type can be retrieved.
 */
const identifier = createKindIdentifier();

export { identifier };
