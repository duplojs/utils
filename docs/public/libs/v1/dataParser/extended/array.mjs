import { DataParserArrayExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

/**
 * {@include dataParser/extended/array/index.md}
 */
const array = detachObjectMethod(DataParserArrayExtended, "create");

export { array };
