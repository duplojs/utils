import { createKind } from './kind.mjs';

function kindClass(kindHandler, parent) {
    const formattedKindHandler = typeof kindHandler === "string"
        ? createKind(kindHandler)
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

export { kindClass };
