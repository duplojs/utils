import { sleep } from "./sleep";

it("sleep", async() => {
	await expect(sleep()).resolves.toBe(undefined);
});
