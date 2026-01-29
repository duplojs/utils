import { DDataParser } from "@scripts";

const syncParser = DDataParser.string();
syncParser.isAsynchronous(); // false

const asyncTransform = DDataParser.transform(
	DDataParser.number(),
	async(value) => {
		const result = await Promise.resolve(value);

		return result;
	},
);
asyncTransform.isAsynchronous(); // true

const asyncArray = DDataParser.array(asyncTransform);
asyncArray.isAsynchronous(); // true
