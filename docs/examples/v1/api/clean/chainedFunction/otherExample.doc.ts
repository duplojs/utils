import { C, type ExpectType } from "@duplojs/utils";

const ChainWithRequirements = C.chainedFunction(
	[
		"loadCount",
		(input: number) => input + 1,
	],
	[
		"saveCount",
		(input: number) => input * 2,
		C.chainedFunction.requirements<["load-completed"]>(),
	],
);

const chainResult = ChainWithRequirements(function *(link1) {
	const [loadedCount, link2] = yield *link1(({ loadCount }) => loadCount(2));

	// Requirements are lifecycle markers: they are mandatory for typing,
	// even when they are not used by the business function itself.
	const [savedCount, chainEnd] = yield *link2(
		({ saveCount }) => saveCount(loadedCount),
		["load-completed"],
	);

	return chainEnd(savedCount);
});

type CheckChainResult = ExpectType<
	typeof chainResult,
	number,
	"strict"
>;

const chainFailure = ChainWithRequirements(function *(link1) {
	const [loadedCount, link2] = yield *link1(({ loadCount }) => loadCount(2));

	// @ts-expect-error Missing requirements tuple for this link.
	const [savedCount, chainEnd] = yield *link2(
		({ saveCount }) => saveCount(loadedCount),
	);

	return chainEnd(savedCount);
});

type CheckChainFailure = ExpectType<
	typeof chainFailure,
	number,
	"strict"
>;
