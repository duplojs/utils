import { detachObjectMethod } from "@scripts/common";
import { DataParserRecoverExtended } from "./base";

/**
 * {@include dataParser/extended/recover/index.md}
 */
export const recover = detachObjectMethod(DataParserRecoverExtended, "create");
