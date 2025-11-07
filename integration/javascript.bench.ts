import { DEither, keyWrappedValue } from "@scripts";
import { bench } from "vitest";

describe("better argument", () => {
	describe("type of arg", () => {
		function passePrimitive(arg: string) {
			return arg.length;
		}

		function passePrimitiveInObject(arg: { value: string }) {
			return arg.value.length;
		}

		const stringValue = "theString";

		const objectValue = { value: stringValue };

		bench("passe string", () => {
			if (passePrimitive(stringValue).valueOf()) {}
		});

		bench("passe string in object", () => {
			if (passePrimitiveInObject(objectValue).valueOf()) {}
		});
	});

	describe("quantity of arg", () => {
		function passeTwoArgs(arg: string, issues: never[]) {
			return arg.length;
		}

		function passeOnlyObject(
			arg: {
				value: string;
				issues: never[];
			},
		) {
			return arg.value.length;
		}

		const issues: never[] = [];
		const stringValue = "theString";

		const objectValue = {
			value: stringValue,
			issues,
		};

		bench("passe two arg", () => {
			if (passeTwoArgs(stringValue, issues).valueOf()) {}
		});

		bench("passe only object", () => {
			if (passeOnlyObject(objectValue).valueOf()) {}
		});
	});
});

describe("better compare", () => {
	const stringA = "value-123456" as any;
	const stringB = "value-654321" as any;

	const numberA = 123456.789 as any;
	const numberB = 987654.321 as any;

	const symbolA = Symbol.for("compare-symbol-A") as any;
	const symbolB = Symbol.for("compare-symbol-B") as any;

	const objectA = {
		value: stringA,
		nested: { num: numberA },
	} as any;
	const objectB = {
		value: stringA,
		nested: { num: numberA },
	} as any;
	const objectC = {
		value: stringB,
		nested: { num: numberB },
	} as any;

	bench("compare string", () => {
		if (stringA === stringB) {
		}
	});

	bench("compare number", () => {
		if (numberA === numberB) {
		}
	});

	bench("compare symbol", () => {
		if (symbolA === symbolB) {
		}
	});

	bench("compare object", () => {
		if (objectA === objectB) {
		}
	});

	bench("compare string-to-number", () => {
		if (stringA === numberA) {
		}
	});

	bench("compare string-to-symbol", () => {
		if (stringA === symbolA) {
		}
	});

	bench("compare number-to-symbol", () => {
		if (numberA === symbolA) {
		}
	});
});

describe.only("instance", () => {
	const value = DEither.error("test");

	const tt = keyWrappedValue;

	bench("spread", () => {
		const newValue = {
			...value,
			[tt]: "test",
		};
	});

	bench("structuredClone", () => {
		const newValue = structuredClone(value);
		newValue[keyWrappedValue as never] = "test" as never;
	});

	const tt1 = DEither.eitherInformationKind.runTimeKey;
	const tt2 = DEither.eitherLeftKind.runTimeKey;
	const tt3 = DEither.eitherErrorKind.runTimeKey;

	bench("declare", () => {
		const newValue = {
			[tt1]: "error",
			[tt2]: null,
			[tt3]: null,
			[tt]: "test",
		};
	});

	bench("declare with key", () => {
		const newValue = {
			huuuuuuuuuuuuuuuuuuuuuuugeKeeeeeeeeeeeeeeeeeeeeeeeeeeeeey1: "error",
			huuuuuuuuuuuuuuuuuuuuuuugeKeeeeeeeeeeeeeeeeeeeeeeeeeeeeey2: null,
			huuuuuuuuuuuuuuuuuuuuuuugeKeeeeeeeeeeeeeeeeeeeeeeeeeeeeey3: null,
			huuuuuuuuuuuuuuuuuuuuuuugeKeeeeeeeeeeeeeeeeeeeeeeeeeeeeey4: "test",
		};
	});
});
