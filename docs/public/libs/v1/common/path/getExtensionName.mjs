import { normalizeWindowsPath } from './utils/normalizeWindowsPath.mjs';
import { minElements } from '../../array/minElements.mjs';

const extensionNameRegex = /.(\.[^./]+|\.)$/;
function getExtensionName(path) {
    if (path === "..") {
        return "";
    }
    const match = extensionNameRegex.exec(normalizeWindowsPath(path));
    if (!!match && minElements(match, 2)) {
        return match[1];
    }
    return "";
}

export { getExtensionName };
