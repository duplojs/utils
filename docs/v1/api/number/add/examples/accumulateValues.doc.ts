import { N, A, pipe } from "@duplojs/utils";

const transactions = [
	{
		type: "creditor",
		amount: 100,
	},
	{
		type: "debtor",
		amount: -50,
	},
	{
		type: "creditor",
		amount: 75,
	},
	{
		type: "debtor",
		amount: -25,
	},
];

const result = pipe(
	transactions,
	A.map((transaction) => transaction.amount),
	A.reduce(
		A.reduceFrom(0),
		({ element, lastValue, next }) => next(
			N.add(lastValue, element),
		),
	),
	(balance) => ({
		balance,
		status: N.min(balance, 0) ? "creditor" : "debtor",
	}),
);

// result: { balance: 100, status: "creditor" }
