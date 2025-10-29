import { createKind, kindHeritage } from "@scripts";
import { bench } from "vitest";

describe("kind", () => {
	const myKind1 = createKind("1");
	const myKind2 = createKind("2");

	class TestClass extends kindHeritage("test", [myKind1]) {

	}

	bench("addTo", () => {
		const value = myKind1.addTo(
			myKind2.addTo(
				{},
			),
		);
	});

	bench("setTo", () => {
		const value = myKind1.setTo(
			myKind2.setTo(
				{},
			),
		);
	});

	bench("instance", () => {
		const value = new TestClass();
	});

	bench("normal", () => {
		const value = {
			[myKind1.runTimeKey]: null,
			[myKind2.runTimeKey]: null,
		};
	});
});
