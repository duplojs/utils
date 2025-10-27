function escapeRegExp(input) {
    return input.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

export { escapeRegExp };
