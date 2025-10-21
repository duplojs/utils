'use strict';

function spliceDelete(...args) {
    if (args.length === 2) {
        const [indexTo, deleteCount] = args;
        return (array) => spliceDelete(array, indexTo, deleteCount);
    }
    const [array, indexTo, deleteCount] = args;
    const copy = [...array];
    copy.splice(indexTo, deleteCount);
    return copy;
}

exports.spliceDelete = spliceDelete;
