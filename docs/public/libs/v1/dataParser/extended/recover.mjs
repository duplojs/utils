import { DataParserRecoverExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

const recover = detachObjectMethod(DataParserRecoverExtended, "create");

export { recover };
