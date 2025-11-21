'use strict';

require('./globalStore.cjs');
require('./builder.cjs');
var error = require('../either/left/error.cjs');
var success = require('../either/right/success.cjs');
var coalescing = require('../array/coalescing.cjs');

function createKindIdentifier() {
    function identifier(...args) {
        if (args.length === 1) {
            const [kind] = args;
            return (input) => identifier(input, kind);
        }
        const [input, kind] = args;
        const formattedKind = coalescing.coalescing(kind);
        for (const kind of formattedKind) {
            if (!kind.has(input)) {
                return error.error(input);
            }
        }
        return success.success(input);
    }
    return identifier;
}

exports.createKindIdentifier = createKindIdentifier;
