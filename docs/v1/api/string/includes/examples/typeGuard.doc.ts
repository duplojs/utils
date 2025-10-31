import { DString } from "@duplojs/utils";

const input = "unionString" as "DuploJS" | "DuploTS";

if (DString.includes(input, "JS")) {
	console.log(`"${input}" contains "JS"`);
	// input: "DuploJS"
} else {
	console.log(`"${input}" does not contain "JS"`);
	// input: "DuploTS"
}
