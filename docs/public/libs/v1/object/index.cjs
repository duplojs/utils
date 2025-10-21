'use strict';

var entries = require('./entries.cjs');
var fromEntries = require('./fromEntries.cjs');
var hasKeys = require('./hasKeys.cjs');
var keys = require('./keys.cjs');
var values = require('./values.cjs');
var getProperty = require('./getProperty.cjs');
var transformProperties = require('./transformProperties.cjs');
var transformProperty = require('./transformProperty.cjs');
var to = require('./to.cjs');
var assign = require('./assign.cjs');
var override = require('./override.cjs');
var omit = require('./omit.cjs');
var pick = require('./pick.cjs');
var deepDiscriminate = require('./deepDiscriminate.cjs');
var getDeepProperty = require('./getDeepProperty.cjs');
var discriminate = require('./discriminate.cjs');
var entry = require('./entry.cjs');



exports.entries = entries.entries;
exports.fromEntries = fromEntries.fromEntries;
exports.hasKeys = hasKeys.hasKeys;
exports.keys = keys.keys;
exports.values = values.values;
exports.getProperty = getProperty.getProperty;
exports.transformProperties = transformProperties.transformProperties;
exports.transformProperty = transformProperty.transformProperty;
exports.to = to.to;
exports.assign = assign.assign;
exports.override = override.override;
exports.omit = omit.omit;
exports.pick = pick.pick;
exports.deepDiscriminate = deepDiscriminate.deepDiscriminate;
exports.getDeepProperty = getDeepProperty.getDeepProperty;
exports.discriminate = discriminate.discriminate;
exports.entry = entry.entry;
