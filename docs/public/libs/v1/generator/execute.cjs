'use strict';

function execute(iterator) {
    if (Symbol.iterator in iterator) {
        for (const __ of iterator) {
        }
        return;
    }
    else {
        return (async () => {
            for await (const __ of iterator) {
            }
        })();
    }
}

exports.execute = execute;
