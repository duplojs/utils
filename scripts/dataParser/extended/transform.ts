import { detachObjectMethod } from "@scripts/common";
import { DataParserTransformExtended } from "./base";

/**
 * {@include dataParser/extended/transform/index.md}
 */
export const transform = detachObjectMethod(DataParserTransformExtended, "create");
