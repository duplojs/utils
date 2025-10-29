import { DNumber, DArray, pipe } from "@duplojs/utils";

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
	DArray.map((transaction) => transaction.amount),
	DArray.reduce(
		DArray.reduceFrom(0),
		({ element, lastValue, next }) => next(
			DNumber.add(lastValue, element),
		),
	),
	(balance) => ({
		balance,
		status: DNumber.min(balance, 0) ? "creditor" : "debtor",
	}),
);

// result: { balance: 100, status: "creditor" }
