'use strict';

var unwrap = require('../common/unwrap.cjs');
require('../common/stringToBytes.cjs');
require('../common/stringToMillisecond.cjs');
require('../common/globalStore.cjs');
require('../common/builder.cjs');
require('../either/bool/falsy.cjs');
require('../either/bool/truthy.cjs');
require('../either/bool/base.cjs');
require('../either/left/create.cjs');
require('../either/left/error.cjs');
require('../either/left/fail.cjs');
require('../either/kind.cjs');
require('../either/right/success.cjs');
require('../either/right/create.cjs');
require('../either/right/ok.cjs');
require('../either/future/success.cjs');
require('../either/future/error.cjs');
require('../either/future/base.cjs');
require('../either/nullable/empty.cjs');
require('../either/nullable/filled.cjs');
require('../either/nullable/base.cjs');
require('../either/nullish/empty.cjs');
require('../either/nullish/filled.cjs');
require('../either/nullish/base.cjs');
require('../either/optional/empty.cjs');
require('../either/optional/filled.cjs');
require('../either/optional/base.cjs');
require('../common/override.cjs');
var override = require('../object/override.cjs');

function asyncReduce(...args) {
    if (args.length === 2) {
        const [fromValue, theFunction] = args;
        return (iterator) => asyncReduce(iterator, fromValue, theFunction);
    }
    const [iterator, fromValue, theFunction] = args;
    let lastValue = unwrap.unwrap(fromValue);
    return (async () => {
        let index = 0;
        for await (const element of iterator) {
            const result = await theFunction({
                element,
                index,
                lastValue,
                nextWithObject: ((object1, object2) => ({
                    "-next": override.override(object1, object2),
                })),
                exit: (output) => ({ "-exit": output }),
                next: (output) => ({ "-next": output }),
            });
            if ("-exit" in result) {
                return result["-exit"];
            }
            lastValue = result["-next"];
            index++;
        }
        return lastValue;
    })();
}

exports.asyncReduce = asyncReduce;
