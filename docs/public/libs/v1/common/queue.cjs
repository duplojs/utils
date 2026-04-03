'use strict';

var callThen = require('./callThen.cjs');
var externalPromise = require('./externalPromise.cjs');
var kind = require('./kind.cjs');
var create = require('../either/left/create.cjs');

const queueKind = kind.createKind("queue");
/**
 * {@include common/queue/index.md}
 */
function createQueue(params) {
    const concurrency = params?.concurrency === undefined || params.concurrency < 1
        ? 1
        : params.concurrency;
    let quantityRunning = 0;
    let firstElement = undefined;
    function add(theFunction) {
        const externalPromise$1 = externalPromise.createExternalPromise();
        const preparedFunction = () => {
            quantityRunning++;
            if (firstElement?.theFunction === preparedFunction) {
                if (firstElement === firstElement.next) {
                    firstElement = undefined;
                }
                else {
                    const newFirst = firstElement.next;
                    const last = firstElement.previous;
                    newFirst.previous = last;
                    last.next = newFirst;
                    firstElement = newFirst;
                }
            }
            let result = undefined;
            try {
                const MaybePromise = theFunction();
                result = MaybePromise instanceof Promise
                    ? MaybePromise.catch((error) => create.left("execution-error", error))
                    : MaybePromise;
            }
            catch (error) {
                result = create.left("execution-error", error);
            }
            callThen.callThen(result, (output) => {
                externalPromise$1.resolve(output);
                quantityRunning--;
                firstElement?.theFunction();
            });
        };
        if (quantityRunning < concurrency) {
            void preparedFunction();
        }
        else if (firstElement === undefined) {
            firstElement = {
                theFunction: preparedFunction,
                next: undefined,
                previous: undefined,
            };
            firstElement.next = firstElement;
            firstElement.previous = firstElement;
        }
        else {
            const oldLast = firstElement.previous;
            const newLastElement = {
                theFunction: preparedFunction,
                next: firstElement,
                previous: firstElement.previous,
            };
            oldLast.next = newLastElement;
            firstElement.previous = newLastElement;
        }
        return externalPromise$1.promise;
    }
    function addExternal() {
        const externalPromiseToStart = externalPromise.createExternalPromise();
        const externalPromiseToFinish = externalPromise.createExternalPromise();
        void add(() => {
            externalPromiseToStart.resolve(externalPromiseToFinish.resolve);
            return externalPromiseToFinish.promise;
        });
        return externalPromiseToStart.promise;
    }
    return queueKind.setTo({
        add,
        addExternal,
    });
}

exports.createQueue = createQueue;
exports.queueKind = queueKind;
