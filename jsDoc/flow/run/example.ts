/* eslint-disable require-yield */
import { F } from "@scripts";

F.run(
	function *(input: string) {
		return input.toUpperCase();
	},
	{ input: "hello" },
); // "HELLO"

F.run(
	function *() {
		yield *F.step("check cache");
		yield *F.breakIf(2, (value) => value === 2);
		return "done";
	},
	{ includeDetails: true },
); // { result: 2, steps: ["check cache"] }

const service = F.createDependence("service")<string>;

F.run(
	function *() {
		const currentService = yield *F.inject(service);
		yield *F.finalizer(() => currentService.toUpperCase());
		return currentService;
	},
	{ dependencies: { service: "api" } },
); // "api"
