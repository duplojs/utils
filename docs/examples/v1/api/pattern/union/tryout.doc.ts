import { type ExpectType, forward, P } from "@duplojs/utils";

type Input = {
	kind: "text";
	content: string;
} | {
	kind: "image";
	url: string;
} | {
	kind: "error";
	message: string;
};

P.match(
	null as unknown as Input,
	forward({ kind: P.union("text", "image") }),
	(value) => {
		type check = ExpectType<
			typeof value,
			{
				kind: "text";
				content: string;
			} | {
				kind: "image";
				url: string;
			},
			"strict"
		>;
	},
);
