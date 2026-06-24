import { DataParserPipeExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

/**
 * {@include dataParser/extended/pipe/index.md}
 */
const pipe = detachObjectMethod(DataParserPipeExtended, "create");

export { pipe };
