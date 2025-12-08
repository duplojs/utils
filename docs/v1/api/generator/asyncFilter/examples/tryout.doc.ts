import { G } from "@duplojs/utils";

const ids = [201, 202, 203, 204];

const response = await fetch("https://api.example.com/orders/status");
const { statuses } = await response.json() as {
	statuses: {
		id: number;
		status: string;
	}[];
};
const statusById = new Map(statuses.map(({ id, status }) => [id, status]));

const iterator = G.asyncFilter(ids, (id) => statusById.get(id) === "paid");

const result = await G.asyncReduce(
	iterator,
	G.reduceFrom<number[]>([]),
	({ element, lastValue, next }) => next([...lastValue, element]),
);
