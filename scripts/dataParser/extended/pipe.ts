import { detachObjectMethod } from "@scripts/common";
import { DataParserPipeExtended } from "./base";

/**
 * {@include dataParser/extended/pipe/index.md}
 */
export const pipe = detachObjectMethod(DataParserPipeExtended, "create");
