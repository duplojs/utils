import { test } from '../../string/test.mjs';

const isAbsoluteRegex = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function isAbsolute(path) {
    return test(path, isAbsoluteRegex);
}

export { isAbsolute };
