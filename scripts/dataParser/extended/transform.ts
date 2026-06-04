import { detachObjectMethod } from "@scripts/common";
import { DataParserTransformExtended } from "./base";

export const transform = detachObjectMethod(DataParserTransformExtended, "create");
