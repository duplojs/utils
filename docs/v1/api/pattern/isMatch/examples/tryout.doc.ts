import { type ExpectType, P } from "@duplojs/utils";

type Input = {
	kind: "text";
	content: string;
} | {
	kind: "image";
	url: string;
};

const input = null as unknown as Input;

if (P.isMatch(input, { kind: "text" })) {
	type check = ExpectType<
		typeof input,
		{
			kind: "text";
			content: string;
		},
		"strict"
	>;
}
