import { minElements } from '../../array/minElements.mjs';

const extensionNameRegex = /.(\.[^./]+|\.)$/;
/**
 * {@include common/path/getExtensionName/index.md}
 */
function getExtensionName(path) {
    if (path === "..") {
        return null;
    }
    const match = extensionNameRegex.exec(path);
    if (!!match && minElements(match, 2)) {
        if (match[1] === ".") {
            return null;
        }
        return match[1];
    }
    return null;
}

export { getExtensionName };
