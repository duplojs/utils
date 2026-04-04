import { F, sleep } from "@duplojs/utils";

const steps: string[] = [];

const saveFlow = F.create(
	async function *(name: string) {
		const release = yield *F.queue({ concurrency: 1 });

		try {
			steps.push(`start:${name}`);
			await sleep(10);
			steps.push(`end:${name}`);
			return `saved:${name}`;
		} finally {
			release();
		}
	},
);

const saveUser = F.toFunction(saveFlow);

await Promise.all([
	saveUser("alice"),
	saveUser("bob"),
]);
// steps: ["start:alice", "end:alice", "start:bob", "end:bob"]
