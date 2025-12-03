import { type ExpectType, O, or, when } from "@duplojs/utils";

type Event =
	| {
		type: "click";
		x: number;
		y: number;
	}
	| {
		type: "keydown";
		key: string;
	}
	| {
		type: "hover";
		target: string;
	};

const input = {
	type: "hover",
	target: "#btn",
} as Event;

const result = when(
	input,
	or([
		O.discriminate("type", "click"),
		O.discriminate("type", "hover"),
	]),
	(value) => {
		type check = ExpectType<
			typeof value,
			{
				type: "click";
				x: number;
				y: number;
			} | {
				type: "hover";
				target: string;
			},
			"strict"
		>;
		return true;
	},
);

type check = ExpectType<
	typeof result,
	true | {
		type: "keydown";
		key: string;
	},
	"strict"
>;
