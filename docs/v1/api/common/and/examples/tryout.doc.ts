import { and } from "@duplojs/utils";

type Animal =
	| { species: "cat"; name: string }
	| { species: "dog"; name: string; vaccinated: boolean }
	| { species: "dog"; name: string; vaccinated?: undefined };

const isDog = (a: Animal): a is Extract<Animal, { species: "dog" }> => a.species === "dog";
const isVaccinated = (a: Animal): a is Extract<Animal, { vaccinated: boolean }> =>
	(a as any).vaccinated === true;

const isVaccinatedDog = and<Animal>([isDog, isVaccinated]);

const rover: Animal = { species: "dog", name: "Rover", vaccinated: true };
const result = isVaccinatedDog(rover);
// result: true (type guard -> rover est un chien vacciné)
