import { equal, pipe, when } from "@scripts";

type Status = "pending" | "success" | "error";

const status = "success" as Status;

if (equal(status, [
	"success",
	"error",
])) {
	// type: "success" | "error"
}

const result = pipe(
	status,
	when(
		equal("success"),
		() => "ok",
	),
);
// result: "ok"
