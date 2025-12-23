import { A, N, O, type ExpectType } from "@duplojs/utils";

const input = [1, 2, 3] as const;

const doubled1 = A.map(
	input,
	(num) => num * 2,
);

const doubleAll = A.map<typeof input, number>((num) => num * 2);
const doubled2 = doubleAll(input);

type CheckDoubled = ExpectType<
	typeof doubled2,
	number[],
	"strict"
>;

interface Person {
	name: string;
	age: number;
}
const getName = O.getProperty<Person, Person, "name">("name");
const name = getName({
	name: "Ada",
	age: 36,
});

type CheckName = ExpectType<
	typeof name,
	string,
	"strict"
>;

const isGreaterThan10 = N.greaterThan(10);
const filtered = A.filter(
	[2, 12, 7, 42],
	(num) => isGreaterThan10(num),
);

type CheckFiltered = ExpectType<
	typeof filtered,
	number[],
	"strict"
>;

