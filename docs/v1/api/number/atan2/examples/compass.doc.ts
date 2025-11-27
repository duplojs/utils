import { N, A, pipe, createEnum } from "@duplojs/utils";

interface GeoLocation {
	latitude: number;
	longitude: number;
	name: string;
}

const degreesToRadians = 180;
const fullCircleDegrees = 360;
const degreesPerDirection = 45;
const directionCount = 8;

const origin: GeoLocation = {
	latitude: 48.8566,
	longitude: 2.3522,
	name: "Paris",
};

const destinations: GeoLocation[] = [
	{
		latitude: 51.5074,
		longitude: -0.1278,
		name: "London",
	},
	{
		latitude: 41.9028,
		longitude: 12.4964,
		name: "Rome",
	},
	{
		latitude: 40.4168,
		longitude: -3.7038,
		name: "Madrid",
	},
	{
		latitude: 52.52,
		longitude: 13.405,
		name: "Berlin",
	},
];

const directionEnum = createEnum(["N", "NE", "E", "SE", "S", "SW", "W", "NW"]);

const result = pipe(
	destinations,
	A.map((destination) => ({
		name: destination.name,
		originLatRad: N.divide(N.multiply(origin.latitude, Math.PI), degreesToRadians),
		destLatRad: N.divide(N.multiply(destination.latitude, Math.PI), degreesToRadians),
		deltaLonRad: N.divide(
			N.multiply(N.subtract(destination.longitude, origin.longitude), Math.PI),
			degreesToRadians,
		),
	})),
	A.map(({ name, originLatRad, destLatRad, deltaLonRad }) => ({
		name,
		yCoord: N.multiply(N.sin(deltaLonRad), N.cos(destLatRad)),
		xCoord: N.subtract(
			N.multiply(N.cos(originLatRad), N.sin(destLatRad)),
			N.multiply(
				N.multiply(N.sin(originLatRad), N.cos(destLatRad)),
				N.cos(deltaLonRad),
			),
		),
	})),
	A.map(({ name, yCoord, xCoord }) => ({
		name,
		compassBearing: pipe(
			N.atan2(yCoord, xCoord),
			N.multiply(degreesToRadians),
			N.divide(Math.PI),
			N.add(fullCircleDegrees),
			N.modulo(fullCircleDegrees),
		),
	})),
	A.map(({ name, compassBearing }) => ({
		destination: name,
		bearing: compassBearing.toFixed(1),
		directionIndex: pipe(
			compassBearing,
			N.divide(degreesPerDirection),
			N.round,
			N.modulo(directionCount),
		),
	})),
	A.map(({ destination, bearing, directionIndex }) => ({
		destination,
		bearing,
		direction: pipe(
			directionEnum.toTuple(),
			A.at(directionIndex),
		),
	})),
);

// result: [
//   { destination: "London", bearing: "330.5", direction: "NW" },
//   { destination: "Rome", bearing: "147.3", direction: "SE" },
//   { destination: "Madrid", bearing: "238.9", direction: "SW" },
//   { destination: "Berlin", bearing: "58.7", direction: "NE" }
// ]
