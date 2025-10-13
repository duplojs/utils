import { DString } from "@duplojs/utils";

const input = "unionString" as "DuploJS" | "DuploTS";
if (DString.endsWith(input, "JS")) {
	console.log(`${input} ends with 'JS'`);
	// input: "DuploJS"
} else {
	console.log(`${input} does not end with 'JS'`);
	// input: "DuploTS"
}
