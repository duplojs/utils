import { G, pipe, type ExpectType } from "@duplojs/utils";

const input = (async function *() {
	yield Promise.resolve(<const>{
		id: "O1",
		status: "open",
	});
	yield <const>{
		id: "O2",
		status: "paid",
	};
	yield <const>{
		id: "O3",
		status: "open",
	};
	yield <const>{
		id: "O4",
		status: "paid",
	};
})();

const result = pipe(
	input,
	G.asyncGroup((order, { output, index }) => order.status === "paid"
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
	Promise<{
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
	}>,
	"flexible"
>;
