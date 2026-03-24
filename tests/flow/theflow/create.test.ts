import { DFlow, type ExpectType } from "@scripts";

describe("create", () => {
	it("wraps a flow function in the flow kind and keeps the same run reference", () => {
		const run = function *(input: number) {
			yield DFlow.createStep("created");
			return input + 1;
		};

		const result = DFlow.create(run);

		expect(DFlow.theFlowKind.getValue(result)).toStrictEqual({
			run,
		});
		expect(DFlow.theFlowKind.getValue(result).run).toBe(run);

		type check = ExpectType<
			typeof result,
			DFlow.TheFlow<typeof run>,
			"strict"
		>;
	});
});
