import { DEither, keyWrappedValue, kindHeritage } from "@scripts";
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
	const eitherError = DEither.error("test");

	const keyWV = keyWrappedValue;

	bench("spread", () => {
		const newValue = {
			...eitherError,
			[keyWV]: "test",
		};
	});

	bench("structuredClone", () => {
		const newValue = structuredClone(eitherError);
		newValue[keyWrappedValue as never] = "test" as never;
	});

	const key1 = DEither.eitherInformationKind.runTimeKey;
	const key2 = DEither.eitherLeftKind.runTimeKey;
	const key3 = DEither.eitherErrorKind.runTimeKey;

	bench("declare", () => {
		const newValue = {
			[key1]: "error",
			[key2]: null,
			[key3]: null,
			[keyWV]: "test",
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

	bench("with for", () => {
		const newObjet = {};

		for (const key in eitherError) {
			newObjet[key as never] = eitherError[key as never];
		}
	});

	class EitherErrorClass extends kindHeritage(
		"EitherError",
		[
			DEither.eitherInformationKind,
			DEither.eitherLeftKind,
			DEither.eitherErrorKind,
		],
	) {
		public [keyWrappedValue]: unknown = null;

		public constructor(
			value: unknown,
		) {
			super(EitherErrorClass.initialValue);
			this[keyWrappedValue] = value;
		}

		private static readonly initialValue = {
			"@DuplojsUtilsEither/error": null,
			"@DuplojsUtilsEither/information": "error",
			"@DuplojsUtilsEither/left": null,
		};
	}

	bench("with class", () => {
		const newValue = new EitherErrorClass("test");
	});
});
