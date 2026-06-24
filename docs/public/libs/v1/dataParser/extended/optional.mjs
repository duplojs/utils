import { DataParserOptionalExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

/**
 * {@include dataParser/extended/optional/index.md}
 */
const optional = detachObjectMethod(DataParserOptionalExtended, "create");

export { optional };
