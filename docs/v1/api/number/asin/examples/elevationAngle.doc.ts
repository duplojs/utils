import { N, A, pipe } from "@duplojs/utils";

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
	A.map((projectile) => ({
		numerator: N.multiply(
			N.multiply(2, gravity),
			projectile.maxHeight,
		),
		denominator: N.power(projectile.initialVelocity, 2),
	})),
	A.map(({ numerator, denominator }) => pipe(
		N.divide(numerator, denominator),
		(sinSquared) => N.power(sinSquared, 0.5),
		N.asin,
		N.multiply(N.divide(180, Math.PI)),
	)),
);

// result: [87.1, 86.4, 81.9]
