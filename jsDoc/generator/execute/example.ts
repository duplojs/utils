import { G, N } from "@scripts";

const source = [5, 10, 15, 20];

const iterator = G.asyncMap(
	source,
	async(value) => {
		if (N.modulo(value, 2) === 0) {
			await fetch("https://api.example.com/collect", {
				method: "POST",
				body: JSON.stringify({ value }),
			});
		}
		return value;
	},
);

await G.execute(iterator);
