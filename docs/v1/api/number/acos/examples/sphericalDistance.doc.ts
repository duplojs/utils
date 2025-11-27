import { N, A, pipe } from "@duplojs/utils";

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
	A.map(([point1, point2]) => ({
		latitude1Rad: N.divide(N.multiply(point1.latitude, Math.PI), 180),
		latitude2Rad: N.divide(N.multiply(point2.latitude, Math.PI), 180),
		longitude1Rad: N.divide(N.multiply(point1.longitude, Math.PI), 180),
		longitude2Rad: N.divide(N.multiply(point2.longitude, Math.PI), 180),
	})),
	A.map(({ latitude1Rad, latitude2Rad, longitude1Rad, longitude2Rad }) => {
		// cos(d) = sin(lat1)sin(lat2) + cos(lat1)cos(lat2)cos(Δlon)
		const cosValue = N.add(
			N.multiply(
				N.sin(latitude1Rad),
				N.sin(latitude2Rad),
			),
			N.multiply(
				N.multiply(
					N.cos(latitude1Rad),
					N.cos(latitude2Rad),
				),
				N.cos(N.subtract(longitude2Rad, longitude1Rad)),
			),
		);

		return N.multiply(N.acos(cosValue), earthRadiusKm);
	}),
);

// result: [344, 3944]
