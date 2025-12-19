import { C } from "@duplojs/utils";

function findPage(page: C.Number) {
	// ...
	return "my-super-page";
}

const page = C.Number.createOrThrow(4);

const result = findPage(page);
