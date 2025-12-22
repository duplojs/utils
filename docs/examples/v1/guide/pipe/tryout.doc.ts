import { A, N, O, forwardLog, innerPipe, pipe, type ExpectType } from "@duplojs/utils";

const numbers = [2, 12, 7, 42];

const isGreaterThan10 = N.greaterThan<number>(10);
const keepGreaterThan10 = A.filter<readonly number[]>(isGreaterThan10);
const doubleAll = A.map<readonly number[], number>((num) => num * 2);

const doubledNumbers = pipe(
	numbers,
	keepGreaterThan10,
	doubleAll,
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

const getName = O.getProperty<Person, Person, "name">("name");
const isAdult = (person: Person) => N.greaterThan(17)(person.age);

const people = [
	{
		name: "Ada",
		age: 36,
	},
	{
		name: "Bob",
		age: 12,
	},
] as const;

const keepAdults = A.filter<readonly Person[]>(isAdult);
const getNames = A.map<readonly Person[], string>(getName);

const adultNames = pipe(
	people,
	keepAdults,
	getNames,
);

type CheckAdultNames = ExpectType<
	typeof adultNames,
	string[],
	"strict"
>;

const normalizeNumbers = innerPipe(
	keepGreaterThan10,
	forwardLog,
	doubleAll,
);

const normalized = normalizeNumbers(numbers);

type CheckNormalized = ExpectType<
	typeof normalized,
	number[],
	"strict"
>;
