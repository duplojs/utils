import { detachObjectMethod } from "@scripts/common";
import { DataParserOptionalExtended } from "./base";

export const optional = detachObjectMethod(DataParserOptionalExtended, "create");
