import { G, pipe, type ExpectType } from "@duplojs/utils";

const input = [
	{
		id: "O1",
		status: "open",
		amount: 10,
	},
	{
		id: "O2",
		status: "paid",
		amount: 42,
	},
	{
		id: "O3",
		status: "open",
		amount: 18,
	},
	{
		id: "O4",
		status: "paid",
		amount: 25,
	},
] as const;

const result = pipe(
	input,
	G.group((order, { output, index }) => order.status === "paid"
		? output("paid", {
			id: order.id,
			index,
		})
		: output("open", {
			id: order.id,
			index,
		})),
);

type check = ExpectType<
	typeof result,
	{
		readonly paid?: readonly [{
			id: "O2" | "O4";
			index: number;
		}, ...{
			id: "O2" | "O4";
			index: number;
		}[]] | undefined;
		readonly open?: readonly [{
			id: "O1" | "O3";
			index: number;
		}, ...{
			id: "O1" | "O3";
			index: number;
		}[]] | undefined;
	},
	"flexible"
>;
