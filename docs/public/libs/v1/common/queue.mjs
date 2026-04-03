import { callThen } from './callThen.mjs';
import { createExternalPromise } from './externalPromise.mjs';
import { createKind } from './kind.mjs';
import { left } from '../either/left/create.mjs';

const queueKind = createKind("queue");
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
        const externalPromise = createExternalPromise();
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
                    ? MaybePromise.catch((error) => left("execution-error", error))
                    : MaybePromise;
            }
            catch (error) {
                result = left("execution-error", error);
            }
            callThen(result, (output) => {
                externalPromise.resolve(output);
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
        return externalPromise.promise;
    }
    function addExternal() {
        const externalPromiseToStart = createExternalPromise();
        const externalPromiseToFinish = createExternalPromise();
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

export { createQueue, queueKind };
