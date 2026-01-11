import { promiseObject } from "@scripts";

const input = {
	user: Promise.resolve({
		id: 1,
		name: "Alice",
	}),
	count: 3,
};

const result = await promiseObject(input);

// type: { user: { id: number; name: string; }; count: number; }
