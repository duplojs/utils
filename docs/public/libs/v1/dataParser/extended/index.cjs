'use strict';

var index = require('./coerce/index.cjs');
var string = require('./string.cjs');
var array = require('./array.cjs');
var bigint = require('./bigint.cjs');
var number = require('./number.cjs');
var transform = require('./transform.cjs');
var union = require('./union.cjs');
var boolean = require('./boolean.cjs');
var empty = require('./empty.cjs');
var lazy = require('./lazy.cjs');
var literal = require('./literal.cjs');
var nil = require('./nil.cjs');
var nullable = require('./nullable.cjs');
var object = require('./object.cjs');
var optional = require('./optional.cjs');
var pipe = require('./pipe.cjs');
var record = require('./record.cjs');
var templateLiteral = require('./templateLiteral.cjs');
var tuple = require('./tuple.cjs');
var unknown = require('./unknown.cjs');



exports.coerce = index;
exports.email = string.email;
exports.string = string.string;
exports.url = string.url;
exports.array = array.array;
exports.bigint = bigint.bigint;
exports.int = number.int;
exports.number = number.number;
exports.transform = transform.transform;
exports.union = union.union;
exports.boolean = boolean.boolean;
exports.empty = empty.empty;
exports.lazy = lazy.lazy;
exports.literal = literal.literal;
exports.nil = nil.nil;
exports.nullable = nullable.nullable;
exports.object = object.object;
exports.optional = optional.optional;
exports.pipe = pipe.pipe;
exports.record = record.record;
exports.templateLiteral = templateLiteral.templateLiteral;
exports.tuple = tuple.tuple;
exports.unknown = unknown.unknown;
