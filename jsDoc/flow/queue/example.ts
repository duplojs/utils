import { F } from "@scripts";

const saveFlow = F.create(
	async function *(name: string) {
		const release = yield *F.queue({
			concurrency: 1,
		});

		try {
			return await Promise.resolve(`saved:${name}` as const);
		} finally {
			release();
		}
	},
);
const saveUser = F.toFunction(saveFlow);

await saveUser("alice"); // Promise<"saved:alice">

await saveUser("bob"); // Promise<"saved:bob">
