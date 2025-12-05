'use strict';

function escapeRegExp(input) {
    return input.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

exports.escapeRegExp = escapeRegExp;
