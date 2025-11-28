'use strict';

require('../common/stringToBytes.cjs');
require('../common/stringToMillisecond.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
var createKindIdentifier = require('../common/createKindIdentifier.cjs');
require('../common/override.cjs');

/**
 * Due to the recursive typing of `DataParsers`, it can’t be used without
 * causing an infinity error. You therefore have to go through the parent
 * type `DataParser`, which makes type discrimination impossible. That’s
 * why the `identifier` function was created. The function ensures that,
 * starting from the parent type and the kinds associated with the data
 * parsers, the correct type can be retrieved.
 */
const identifier = createKindIdentifier.createKindIdentifier();

exports.identifier = identifier;
