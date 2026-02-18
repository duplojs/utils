import { escapeRegExp } from './escapeRegExp.mjs';
import { TheTime } from '../date/theTime.mjs';
import { TheDate } from '../date/theDate.mjs';

const separator = "/*\\";
const firstElementInPathRegex = new RegExp(`^((?:(?!${escapeRegExp(separator)}).)*)(?:${escapeRegExp(separator)})?`);
const getIndexRegex = /^\[(\d+)\]$/;
const invalidEntryRegex = /__proto__|constructor|prototype/;
class TheFormData extends FormData {
    inputValues;
    constructor(inputValues) {
        super();
        this.inputValues = inputValues;
        for (const entry of TheFormData.toFlatEntries(inputValues)) {
            this.append(entry[0], entry[1]);
        }
    }
    static *toFlatEntries(value, path) {
        if (typeof value === "string"
            || value instanceof TheTime
            || value instanceof TheDate
            || typeof value === "number"
            || typeof value === "boolean") {
            yield [path ?? "", value.toString()];
        }
        else if (value instanceof File) {
            yield [path ?? "", value];
        }
        else if (value === null) {
            yield [path ?? "", "null"];
        }
        else if (value === undefined) {
            return;
        }
        else if (value instanceof Array) {
            for (let index = 0; index < value.length; index++) {
                const entriesIterator = this.toFlatEntries(value[index], path === undefined
                    ? `[${index}]`
                    : `${path}${separator}[${index}]`);
                for (const entry of entriesIterator) {
                    yield entry;
                }
            }
        }
        else {
            for (const key in value) {
                const entriesIterator = this.toFlatEntries(value[key], path === undefined
                    ? key
                    : `${path}${separator}${key}`);
                for (const entry of entriesIterator) {
                    yield entry;
                }
            }
        }
    }
    static fromEntries(iterable, arrayMaxIndex) {
        const constructObject = (object, path, value) => {
            const firstElement = path.match(firstElementInPathRegex)[1];
            const index = firstElement.match(getIndexRegex)?.[1];
            if (index && Number(index) > arrayMaxIndex) {
                return object;
            }
            let currentObject = object;
            if (currentObject === undefined) {
                if (index !== undefined) {
                    currentObject = [];
                }
                else {
                    currentObject = {};
                }
            }
            if (firstElement === path) {
                currentObject[(index ?? firstElement)] = value;
                return currentObject;
            }
            currentObject[(index ?? firstElement)] = constructObject(currentObject[(index ?? firstElement)], path.replace(firstElementInPathRegex, ""), value);
            return currentObject;
        };
        let result = undefined;
        for (const entry of iterable) {
            if (invalidEntryRegex.test(entry[0])) {
                continue;
            }
            result = constructObject(result, entry[0], entry[1]);
        }
        return result ?? {};
    }
    /**
     * @internal
     */
    static "new"(inputValues) {
        return new TheFormData(inputValues);
    }
}
/**
 * {@include common/createFormData/index.md}
 */
function createFormData(inputValues) {
    return TheFormData.new(inputValues);
}

export { TheFormData, createFormData };
