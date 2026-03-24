import { F } from "@scripts";

F.run(
	function *() {
		yield *F.defer(() => void console.log("close connection"));
		return "done";
	},
); // "done"

F.run(
	function *() {
		yield *F.defer(() => void console.log("clear cache"));
		yield *F.breakIf(2, (value) => value === 2);
		return "done";
	},
); // 2

await F.run(
	async function *() {
		yield *F.defer(async() => {
			await Promise.resolve();
		});
		return Promise.resolve("done");
	},
); // Promise<"done">
