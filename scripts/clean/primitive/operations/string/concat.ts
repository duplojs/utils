import { unwrap, wrapValue } from "@scripts/common";
import { type String } from "../../base";

/**
 * {@include clean/concat/index.md}
 */
export function concat(
	text: String | string,
): (input: String) => String;

export function concat(
	input: String,
	...textsRest: (String | string)[]
): String;

export function concat(...args: [String | string] | [String, ...(String | string)[]]) {
	if (args.length === 1) {
		const [text] = args;
		return (input: String) => concat(input, text);
	}

	const [input, ...textsRest] = args as [String, ...(String | string)[]];

	return wrapValue(
		unwrap(input)
			.concat(
				...textsRest.map(unwrap),
			),
	);
}
