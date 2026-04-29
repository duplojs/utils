import { is } from '../date/is.mjs';
import { isTime } from '../date/isTime.mjs';

function findDuplicates(array) {
    const store = new Map();
    let storeTimeObject = undefined;
    let result = undefined;
    for (let index$1 = 0; index$1 < array.length; index$1++) {
        const element = array[index$1];
        if (is(element) || isTime(element)) {
            storeTimeObject ??= new Map();
            const serializedValue = element.toJSON();
            const storedElement = storeTimeObject.get(serializedValue) ?? element;
            const storedCount = store.get(storedElement);
            if (storedCount === 1) {
                result ??= [];
                result.push(storedElement);
            }
            store.set(storedElement, (storedCount ?? 0) + 1);
            if (storedElement === element) {
                storeTimeObject.set(serializedValue, element);
            }
        }
        else {
            const storedCount = store.get(element);
            if (storedCount === 1) {
                result ??= [];
                result.push(element);
            }
            store.set(element, (storedCount ?? 0) + 1);
        }
    }
    return result;
}

export { findDuplicates };
