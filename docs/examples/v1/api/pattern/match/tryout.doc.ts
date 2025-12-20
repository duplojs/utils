import { type ExpectType, P } from "@duplojs/utils";

type Event =
	| {
		type: "created";
		payload: {
			id: number;
			by: string;
		};
	}
	| {
		type: "deleted";
		id: number;
	}
	| {
		type: "error";
		message: string;
	};

const input = null as unknown as Event;

P.match(
	input,
	{ type: "created" },
	({ payload }) => {
	type check = ExpectType<
				typeof payload,
		{
			id: number;
			by: string;
		},
		"strict"
	>;
	},
);
