import { equal } from "@duplojs/utils";

type Status = "pending" | "success" | "error";

const isFinal = equal<Status, "success" | "error">(["success", "error"]);

const status: Status = "success";
if (isFinal(status)) {
	// status est affiné à "success" | "error"
}
