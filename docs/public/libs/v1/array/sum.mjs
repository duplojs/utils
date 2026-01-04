/**
 * {@include array/sum/index.md}
 */
function sum(array) {
    let result = 0;
    for (const number of array) {
        result += number;
    }
    return result;
}

export { sum };
