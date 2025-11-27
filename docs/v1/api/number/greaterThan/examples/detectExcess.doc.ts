import { N, A, pipe } from "@duplojs/utils";

interface Transaction {
	id: `T${number}`;
	amount: number;
}

const transactions: Transaction[] = [
	{
		id: "T1",
		amount: 100,
	},
	{
		id: "T2",
		amount: 250,
	},
	{
		id: "T3",
		amount: 200,
	},
	{
		id: "T4",
		amount: 150,
	},
];

const maxAmount = 200;

const result = pipe(
	transactions,
	A.map((transaction) => ({
		...transaction,
		excess: N.greaterThan(transaction.amount, maxAmount),
	})),
);

// result: [
//   { id: "T1", amount: 100, excess: false },
//   { id: "T2", amount: 250, excess: true },
//   { id: "T3", amount: 200, excess: false },
//   { id: "T4", amount: 150, excess: false }
// ]
