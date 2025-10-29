import { DNumber, DArray, pipe } from "@duplojs/utils";

interface GameObject {
	xPosition: number;
	yPosition: number;
	id: string;
}

const degreesToRadians = 180;

const player: GameObject = {
	xPosition: 100,
	yPosition: 100,
	id: "player",
};

const enemies: GameObject[] = [
	{
		xPosition: 150,
		yPosition: 100,
		id: "enemy1",
	},
	{
		xPosition: 100,
		yPosition: 50,
		id: "enemy2",
	},
	{
		xPosition: 50,
		yPosition: 150,
		id: "enemy3",
	},
	{
		xPosition: 200,
		yPosition: 50,
		id: "enemy4",
	},
];

const result = pipe(
	enemies,
	DArray.map((enemy) => ({
		enemyId: enemy.id,
		deltaX: DNumber.subtract(enemy.xPosition, player.xPosition),
		deltaY: DNumber.subtract(enemy.yPosition, player.yPosition),
	})),
	DArray.map(({ enemyId, deltaX, deltaY }) => ({
		enemy: enemyId,
		rotationRadians: DNumber.atan2(deltaY, deltaX),
	})),
	DArray.map(({ enemy, rotationRadians }) => ({
		enemy,
		rotationDegrees: pipe(
			rotationRadians,
			DNumber.multiply(degreesToRadians),
			DNumber.divide(Math.PI),
		),
		rotationRadians,
	})),
);

// result: [
//   { enemy: "enemy1", rotationDegrees: 0, rotationRadians: 0 },
//   { enemy: "enemy2", rotationDegrees: -90, rotationRadians: -1.57 },
//   { enemy: "enemy3", rotationDegrees: 135, rotationRadians: 2.36 },
//   { enemy: "enemy4", rotationDegrees: -26.6, rotationRadians: -0.46 }
// ]
