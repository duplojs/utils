import { equal, type ExpectType } from "@duplojs/utils";

type Status = "pending" | "success" | "error";

const input = "success" as Status;
if (equal(input, ["success", "error"])) {
	type check = ExpectType<
		typeof input,
		"success" | "error",
		"strict"
	>;
}
