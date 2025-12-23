import { A, N, O, forwardLog, innerPipe, pipe, type ExpectType } from "@duplojs/utils";

const numbers = [2, 12, 7, 42];

const doubledNumbers = pipe(
	numbers,
	A.filter(N.greaterThan(10)),
	A.map((num) => num * 2),
);

type CheckDoubledNumbers = ExpectType<
	typeof doubledNumbers,
	number[],
	"strict"
>;

interface Person {
	name: string;
	age: number;
}

const people: Person[] = [
	{
		name: "Ada",
		age: 36,
	},
	{
		name: "Bob",
		age: 12,
	},
];

const adultNames = pipe(
	people,
	A.filter(({ age }) => N.greater(age, 18)),
	A.map(O.getProperty("name")),
);

type CheckAdultNames = ExpectType<
	typeof adultNames,
	string[],
	"strict"
>;

const normalizeNumbers = innerPipe(
	(numbers: number[]) => numbers,
	A.filter(N.greaterThan(10)),
	forwardLog,
	A.map(N.multiply(2)),
);

const normalized = normalizeNumbers(numbers);

type CheckNormalized = ExpectType<
	typeof normalized,
	number[],
	"strict"
>;
