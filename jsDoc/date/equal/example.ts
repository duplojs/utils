import { D } from "@scripts";

const first = D.create("2024-06-20");
const second = D.create("2024-06-20");

if (D.equal(first, second)) {
	// is equal
}

const serialized = D.serialize(second);
D.equal(first, serialized); // true
