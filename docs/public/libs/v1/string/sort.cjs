'use strict';

function sort(...args) {
    if (args.length === 1) {
        const [type] = args;
        return (array) => sort(array, type);
    }
    const [array, type] = args;
    return [...array].sort(type === "DSC"
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

exports.sort = sort;
