/* eslint-disable @typescript-eslint/require-await */
import { F } from "@scripts";

const userInitializer = F.createInitializer(
	(name: string) => ({ name }),
	{ defer: (user) => void console.log(`close:${user.name}`) },
);

F.run(
	function *() {
		return yield *userInitializer("Ada");
	},
); // { name: "Ada" }

const finalizerLogs: string[] = [];
const tokenInitializer = F.createInitializer(
	(id: number) => `token-${id}`,
	{ finalizer: (token) => finalizerLogs.push(token) },
);

F.run(
	function *() {
		return yield *tokenInitializer(42);
	},
); // "token-42"

const asyncInitializer = F.createInitializer(
	(name: string) => Promise.resolve({
		name,
		ready: true,
	}),
	{ defer: (user) => void console.log(`async:${user.name}`) },
);

void await F.run(
	async function *() {
		const value = yield *asyncInitializer("Linus");
		// Promise<{ name: string; ready: true }>

		return;
	},
);
