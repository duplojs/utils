import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherBool, type EitherBoolTruthy, type EitherBoolFalsy } from "@scripts/either";

describe("createEitherBool", () => {
	it("falsy undefined", () => {
		const either = createEitherBool();

		expect(either).toStrictEqual({
			"kind-either-bool": null,
			"kind-either-falsy": null,
			"kind-either-information": "bool",
			"kind-either-left": null,
			value: undefined,
		});

		type check = ExpectType<
			typeof either,
			EitherBoolFalsy<undefined>,
			"strict"
		>;

		expect(createEitherBool()).toStrictEqual({
			"kind-either-bool": null,
			"kind-either-falsy": null,
			"kind-either-information": "bool",
			"kind-either-left": null,
			value: undefined,
		});
	});

	it("falsy null", () => {
		const either = createEitherBool(null);

		expect(either).toStrictEqual({
			"kind-either-bool": null,
			"kind-either-falsy": null,
			"kind-either-information": "bool",
			"kind-either-left": null,
			value: null,
		});

		type check = ExpectType<
			typeof either,
			EitherBoolFalsy<null>,
			"strict"
		>;
	});

	it("falsy empty string", () => {
		const either = createEitherBool("");

		expect(either).toStrictEqual({
			"kind-either-bool": null,
			"kind-either-falsy": null,
			"kind-either-information": "bool",
			"kind-either-left": null,
			value: "",
		});

		type check = ExpectType<
			typeof either,
			EitherBoolFalsy<"">,
			"strict"
		>;
	});

	it("falsy 0", () => {
		const either = createEitherBool(0);

		expect(either).toStrictEqual({
			"kind-either-bool": null,
			"kind-either-falsy": null,
			"kind-either-information": "bool",
			"kind-either-left": null,
			value: 0,
		});

		type check = ExpectType<
			typeof either,
			EitherBoolFalsy<0>,
			"strict"
		>;
	});

	it("falsy false", () => {
		const either = createEitherBool(false);

		expect(either).toStrictEqual({
			"kind-either-bool": null,
			"kind-either-falsy": null,
			"kind-either-information": "bool",
			"kind-either-left": null,
			value: false,
		});

		type check = ExpectType<
			typeof either,
			EitherBoolFalsy<false>,
			"strict"
		>;
	});

	it("truthy object", () => {
		const either = createEitherBool({});

		expect(either).toStrictEqual({
			"kind-either-bool": null,
			"kind-either-truthy": null,
			"kind-either-information": "bool",
			"kind-either-right": null,
			value: {},
		});

		type check = ExpectType<
			typeof either,
			EitherBoolTruthy<{}>,
			"strict"
		>;
	});

	it("truthy true", () => {
		const either = createEitherBool(true);

		expect(either).toStrictEqual({
			"kind-either-bool": null,
			"kind-either-truthy": null,
			"kind-either-information": "bool",
			"kind-either-right": null,
			value: true,
		});

		type check = ExpectType<
			typeof either,
			EitherBoolTruthy<true>,
			"strict"
		>;
	});

	it("truthy number", () => {
		const either = createEitherBool(10);

		expect(either).toStrictEqual({
			"kind-either-bool": null,
			"kind-either-truthy": null,
			"kind-either-information": "bool",
			"kind-either-right": null,
			value: 10,
		});

		type check = ExpectType<
			typeof either,
			EitherBoolTruthy<10>,
			"strict"
		>;
	});

	it("truthy string", () => {
		const either = createEitherBool("test");

		expect(either).toStrictEqual({
			"kind-either-bool": null,
			"kind-either-truthy": null,
			"kind-either-information": "bool",
			"kind-either-right": null,
			value: "test",
		});

		type check = ExpectType<
			typeof either,
			EitherBoolTruthy<"test">,
			"strict"
		>;
	});
});
