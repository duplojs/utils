import { DataParserPipeExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

const pipe = detachObjectMethod(DataParserPipeExtended, "create");

export { pipe };
