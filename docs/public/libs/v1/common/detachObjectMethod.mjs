function detachObjectMethod(inputObject, method) {
    return inputObject[method].bind(inputObject);
}

export { detachObjectMethod };
