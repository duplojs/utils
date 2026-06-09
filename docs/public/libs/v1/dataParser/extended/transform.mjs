import { DataParserTransformExtended } from './base.mjs';
import { detachObjectMethod } from '../../common/detachObjectMethod.mjs';

const transform = detachObjectMethod(DataParserTransformExtended, "create");

export { transform };
