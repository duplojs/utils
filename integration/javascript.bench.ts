/* eslint-disable @typescript-eslint/max-params */
/* eslint-disable @typescript-eslint/prefer-for-of */
import { A, type AnyFunction, DEither, forward, keyWrappedValue, kindHeritage, S } from "@duplojs/utils";
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

describe("instance", () => {
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

describe("pipe", () => {
	function spreadForOfPipe(input: any, ...args: AnyFunction[]) {
		let result = input;

		for (const pipe of args) {
			result = pipe(result);
		}
		return result;
	}

	function spreadForPipe(input: any, ...args: AnyFunction[]) {
		let result = input;

		for (let index = 0; index < args.length; index++) {
			result = args[index]!(result);
		}

		return result;
	}

	function spreadWithoutForPipe(input: any, ...args: AnyFunction[]) {
		const length = args.length;

		if (length === 1) {
			return args[0]!(input);
		} else if (length === 2) {
			return args[1]!(args[0]!(input));
		} else if (length === 3) {
			return args[2]!(args[1]!(args[0]!(input)));
		} else if (length === 4) {
			return args[3]!(args[2]!(args[1]!(args[0]!(input))));
		}
	}

	function pipeIfArg(
		input: any,
		function1: AnyFunction,
		function2?: AnyFunction,
		function3?: AnyFunction,
		function4?: AnyFunction,
	) {
		let result = function1(input);

		if (!function2) {
			return result;
		}

		result = function2(result);

		if (!function3) {
			return result;
		}

		result = function3(result);

		if (!function4) {
			return result;
		}

		result = function4(result);

		return result;
	}

	bench("if arg", () => {
		const result = pipeIfArg(
			"test",
			S.split(""),
			A.join("-"),
			S.split("-"),
			A.join("-"),
		);

		expect(result).toBe("t-e-s-t");
	}, {
		time: 1000,
		iterations: 1000,
	});

	bench("spread for of", () => {
		const result = spreadForOfPipe(
			"test",
			S.split(""),
			A.join("-"),
			S.split("-"),
			A.join("-"),
		);

		expect(result).toBe("t-e-s-t");
	});

	bench("spread for", () => {
		const result = spreadForPipe(
			"test",
			S.split(""),
			A.join("-"),
			S.split("-"),
			A.join("-"),
		);

		expect(result).toBe("t-e-s-t");
	});

	bench("spread without for", () => {
		const result = spreadWithoutForPipe(
			"test",
			S.split(""),
			A.join("-"),
			S.split("-"),
			A.join("-"),
		);

		expect(result).toBe("t-e-s-t");
	});

	bench("manual", () => {
		const result = (() => {
			let result: any = "test";

			result = S.split(result, "");

			result = A.join(result, "-");

			result = S.split(result, "-");

			result = A.join(result, "-");

			return result;
		})();

		expect(result).toBe("t-e-s-t");
	});
});

describe("asyncPipe", () => {
	async function asyncPipe(input: any, ...args: AnyFunction[]) {
		let result = await input;

		for (const pipe of args) {
			result = await pipe(result);
		}

		return result;
	}

	async function asyncPipeWithIf(input: any, ...args: AnyFunction[]) {
		let result = input instanceof Promise ? await input : input;

		for (const pipe of args) {
			result = pipe(result);

			if (result instanceof Promise) {
				result = await result;
			}
		}

		return result;
	}

	bench("normal with only Promise", async() => {
		const result = await asyncPipe(
			Promise.resolve("test"),
			(value) => Promise.resolve(value),
			(value) => Promise.resolve(value),
			(value) => Promise.resolve(value),
			(value) => Promise.resolve(value),
		);
	});

	bench("if with only Promise", async() => {
		const result = await asyncPipeWithIf(
			Promise.resolve("test"),
			(value) => Promise.resolve(value),
			(value) => Promise.resolve(value),
			(value) => Promise.resolve(value),
			(value) => Promise.resolve(value),
		);
	});

	bench("normal with only sync and promise", async() => {
		const result = await asyncPipe(
			"test",
			(value) => Promise.resolve(value),
			forward,
			(value) => Promise.resolve(value),
			forward,
		);
	});

	bench("if with only sync and promise", async() => {
		const result = await asyncPipeWithIf(
			"test",
			(value) => Promise.resolve(value),
			forward,
			(value) => Promise.resolve(value),
			forward,
		);
	});
});
