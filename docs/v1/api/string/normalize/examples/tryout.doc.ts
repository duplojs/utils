import { DString } from "@duplojs/utils";

const input = "CafÃ©";
const result = DString.normalize(input, "NFD");
// result: "Café"
