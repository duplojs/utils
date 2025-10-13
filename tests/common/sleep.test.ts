import { sleep } from "@scripts";

it("sleep", async() => {
	await expect(sleep()).resolves.toBe(undefined);
});
