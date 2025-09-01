import { createWrappedKind, type ExpectType, type Kind, toWrappedValue, type WrappedValue } from "@scripts/common";

it("createWrappedKind", () => {
	const myKind = createWrappedKind(
		"my-kind",
		createWrappedKind.constrain<WrappedValue<number>>(),
	);

	const result = myKind(
		toWrappedValue(10),
	);

	expect(result).toStrictEqual({
		"kind-my-kind": null,
		value: 10,
	});

	type check = ExpectType<
		typeof result,
		WrappedValue<10> & Kind<"my-kind">,
		"strict"
	>;
});
