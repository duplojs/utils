import { A } from "@duplojs/utils";

const input = ["todo", "inProgress", "done"] as const;

const result = A.fillAll(input, "archived");
// result: ["archived", "archived", "archived"]
