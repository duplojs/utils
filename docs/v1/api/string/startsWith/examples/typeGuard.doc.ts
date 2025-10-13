import { DString } from "@duplojs/utils";

const input = "unionString" as "DuploJS" | "NestJS";

if (DString.startsWith(input, "Duplo")) {
	console.log(`"${input}" starts with "Duplo"`);
	// input: "DuploJS"
} else {
	console.log(`"${input}" does not start with "Duplo"`);
	// input: "NestJS"
}
