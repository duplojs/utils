'use strict';

var kind = require('./kind.cjs');

function kindClass(kindHandler, parent) {
    const formattedKindHandler = typeof kindHandler === "string"
        ? kind.createKind(kindHandler)
        : kindHandler;
    return class extends (parent ?? class {
    }) {
        constructor(kindValue, ...parentParams) {
            super(...parentParams);
            this[formattedKindHandler.runTimeKey] = kindValue;
        }
        static [Symbol.hasInstance] = formattedKindHandler.has;
    };
}

exports.kindClass = kindClass;
