import { DataParserRecoverExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

/**
 * {@include dataParser/extended/recover/index.md}
 */
const recover = detachObjectMethod(DataParserRecoverExtended, "create");

export { recover };
