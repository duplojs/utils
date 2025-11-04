import { DNumber, DArray, pipe, createEnum } from "@duplojs/utils";

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
	DArray.map((destination) => ({
		name: destination.name,
		originLatRad: DNumber.divide(DNumber.multiply(origin.latitude, Math.PI), degreesToRadians),
		destLatRad: DNumber.divide(DNumber.multiply(destination.latitude, Math.PI), degreesToRadians),
		deltaLonRad: DNumber.divide(
			DNumber.multiply(DNumber.subtract(destination.longitude, origin.longitude), Math.PI),
			degreesToRadians,
		),
	})),
	DArray.map(({ name, originLatRad, destLatRad, deltaLonRad }) => ({
		name,
		yCoord: DNumber.multiply(DNumber.sin(deltaLonRad), DNumber.cos(destLatRad)),
		xCoord: DNumber.subtract(
			DNumber.multiply(DNumber.cos(originLatRad), DNumber.sin(destLatRad)),
			DNumber.multiply(
				DNumber.multiply(DNumber.sin(originLatRad), DNumber.cos(destLatRad)),
				DNumber.cos(deltaLonRad),
			),
		),
	})),
	DArray.map(({ name, yCoord, xCoord }) => ({
		name,
		compassBearing: pipe(
			DNumber.atan2(yCoord, xCoord),
			DNumber.multiply(degreesToRadians),
			DNumber.divide(Math.PI),
			DNumber.add(fullCircleDegrees),
			DNumber.modulo(fullCircleDegrees),
		),
	})),
	DArray.map(({ name, compassBearing }) => ({
		destination: name,
		bearing: compassBearing.toFixed(1),
		directionIndex: pipe(
			compassBearing,
			DNumber.divide(degreesPerDirection),
			DNumber.round,
			DNumber.modulo(directionCount),
		),
	})),
	DArray.map(({ destination, bearing, directionIndex }) => ({
		destination,
		bearing,
		direction: pipe(
			directionEnum.toTuple(),
			DArray.at(directionIndex),
		),
	})),
);

// result: [
//   { destination: "London", bearing: "330.5", direction: "NW" },
//   { destination: "Rome", bearing: "147.3", direction: "SE" },
//   { destination: "Madrid", bearing: "238.9", direction: "SW" },
//   { destination: "Berlin", bearing: "58.7", direction: "NE" }
// ]
