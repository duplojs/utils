import { D } from "@duplojs/utils";

const input = D.create("2023-11-14");
const result = D.toISOString(input);
// result: "2023-11-14T00:00:00.000Z"
