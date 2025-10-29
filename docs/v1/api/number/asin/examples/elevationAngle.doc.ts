import { DNumber, DArray, pipe } from "@duplojs/utils";

interface Projectile {
	maxHeight: number;
	initialVelocity: number;
}

const gravity = 9.81;
const projectiles: Projectile[] = [
	{
		maxHeight: 20,
		initialVelocity: 20,
	},
	{
		maxHeight: 45,
		initialVelocity: 30,
	},
	{
		maxHeight: 80,
		initialVelocity: 40,
	},
];

const result = pipe(
	projectiles,
	DArray.map((projectile) => ({
		numerator: DNumber.multiply(
			DNumber.multiply(2, gravity),
			projectile.maxHeight,
		),
		denominator: DNumber.power(projectile.initialVelocity, 2),
	})),
	DArray.map(({ numerator, denominator }) => pipe(
		DNumber.divide(numerator, denominator),
		(sinSquared) => DNumber.power(sinSquared, 0.5),
		DNumber.asin,
		DNumber.multiply(DNumber.divide(180, Math.PI)),
	)),
);

// result: [87.1, 86.4, 81.9]
