import { DNumber, DArray, pipe } from "@duplojs/utils";

interface GeoPoint {
	latitude: number;
	longitude: number;
}

const earthRadiusKm = 6371;

const routes: [GeoPoint, GeoPoint][] = [
	[
		{
			latitude: 48.8566,
			longitude: 2.3522,
		},
		{
			latitude: 51.5074,
			longitude: -0.1278,
		},
	],
	[
		{
			latitude: 40.7128,
			longitude: -74.006,
		},
		{
			latitude: 34.0522,
			longitude: -118.2437,
		},
	],
];

const result = pipe(
	routes,
	DArray.map(([point1, point2]) => ({
		latitude1Rad: DNumber.divide(DNumber.multiply(point1.latitude, Math.PI), 180),
		latitude2Rad: DNumber.divide(DNumber.multiply(point2.latitude, Math.PI), 180),
		longitude1Rad: DNumber.divide(DNumber.multiply(point1.longitude, Math.PI), 180),
		longitude2Rad: DNumber.divide(DNumber.multiply(point2.longitude, Math.PI), 180),
	})),
	DArray.map(({ latitude1Rad, latitude2Rad, longitude1Rad, longitude2Rad }) => {
		// cos(d) = sin(lat1)sin(lat2) + cos(lat1)cos(lat2)cos(Δlon)
		const cosValue = DNumber.add(
			DNumber.multiply(
				DNumber.sin(latitude1Rad),
				DNumber.sin(latitude2Rad),
			),
			DNumber.multiply(
				DNumber.multiply(
					DNumber.cos(latitude1Rad),
					DNumber.cos(latitude2Rad),
				),
				DNumber.cos(DNumber.subtract(longitude2Rad, longitude1Rad)),
			),
		);

		return DNumber.multiply(DNumber.acos(cosValue), earthRadiusKm);
	}),
);

// result: [344, 3944]
