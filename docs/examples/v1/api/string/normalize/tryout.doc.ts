import { S } from "@duplojs/utils";

const input = "CafÃ©";
const result = S.normalize(input, "NFD");
// result: "Café"
