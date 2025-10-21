'use strict';

function sortString(...args) {
    if (args.length === 1) {
        const [sort] = args;
        return (array) => sortString(array, sort);
    }
    const [array, sort] = args;
    return [...array].sort(sort === "dsc"
        ? (first, second) => {
            if (first < second) {
                return 1;
            }
            else if (first > second) {
                return -1;
            }
            else {
                return 0;
            }
        }
        : undefined);
}

exports.sortString = sortString;
