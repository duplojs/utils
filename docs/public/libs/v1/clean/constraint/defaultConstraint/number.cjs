'use strict';

var base = require('../base.cjs');
var base$1 = require('../../primitive/base.cjs');
var int = require('../../../dataParser/parsers/number/checkers/int.cjs');
var min = require('../../../dataParser/parsers/number/checkers/min.cjs');
var max = require('../../../dataParser/parsers/number/checkers/max.cjs');

const Int = base.createConstraint("int", base$1.Number, int.checkerInt());
const Positive = base.createConstraint("positive", base$1.Number, min.checkerNumberMin(1));
const Negative = base.createConstraint("negative", base$1.Number, max.checkerNumberMax(-1));

exports.Int = Int;
exports.Negative = Negative;
exports.Positive = Positive;
