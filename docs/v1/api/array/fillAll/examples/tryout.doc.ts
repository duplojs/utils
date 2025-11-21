import { DArray } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"] as const;

const result = DArray.fillAll(input, "archived");
// result: ["archived", "archived", "archived"]
