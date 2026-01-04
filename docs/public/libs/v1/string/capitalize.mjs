/**
 * {@include string/capitalize/index.md}
 */
function capitalize(input) {
    return `${input.charAt(0).toUpperCase()}${input.slice(1)}`;
}

export { capitalize };
