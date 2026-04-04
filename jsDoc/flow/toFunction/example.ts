import { F } from "@scripts";

const runUppercase = F.toFunction(
	function *(input: string) {
		yield *F.step("uppercase");
		return input.toUpperCase();
	},
);
runUppercase("duplo"); // "DUPLO"

const runWithDetails = F.toFunction(
	function *(input: string) {
		yield *F.step("format");
		return input.length;
	},
	{ includeDetails: true },
);
runWithDetails("hello"); // { result: 5, steps: ["format"] }

const service = F.createDependence("service")<string>;
const runWithDependencies = F.toFunction(
	function *(input: string) {
		const currentService = yield *F.inject(service);
		return `${currentService}:${input}`;
	},
	{ dependencies: { service: "api" } },
);
runWithDependencies("users"); // "api:users"
