'use strict';

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
                return false;
            }
        }
        return true;
    }
    return identifier;
}

exports.createKindIdentifier = createKindIdentifier;
