import { DP } from "@duplojs/utils";

const syncParser = DP.string();
const syncIsAsync = syncParser.isAsynchronous();

const asyncTransform = DP.transform(
	DP.number(),
	async(value) => {
		const result = await Promise.resolve(value);

		return result;
	},
);

const asyncIsAsync = asyncTransform.isAsynchronous();

const asyncArray = DP.array(asyncTransform);
const asyncArrayIsAsync = asyncArray.isAsynchronous();
