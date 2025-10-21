import { entries } from '../object/entries.mjs';

function clone(unknownValue) {
    if (!unknownValue) {
        return unknownValue;
    }
    else if (typeof unknownValue !== "object") {
        return unknownValue;
    }
    else if (unknownValue instanceof Array) {
        return unknownValue.map(clone);
    }
    else {
        return entries(unknownValue)
            .reduce((pv, [key, value]) => {
            pv[key] = clone(value);
            return pv;
        }, {});
    }
}

export { clone };
