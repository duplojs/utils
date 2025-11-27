import { N, A, pipe } from "@duplojs/utils";

interface Room {
	name: string;
	occupancy: number;
}

const rooms: Room[] = [
	{
		name: "Room A",
		occupancy: 45,
	},
	{
		name: "Room B",
		occupancy: 50,
	},
	{
		name: "Room C",
		occupancy: 55,
	},
	{
		name: "Room D",
		occupancy: 30,
	},
];

const maxCapacity = 50;

const result = pipe(
	rooms,
	A.map((room) => ({
		...room,
		withinCapacity: N.less(room.occupancy, maxCapacity),
	})),
);

// result: [
//   { name: "Room A", occupancy: 45, withinCapacity: true },
//   { name: "Room B", occupancy: 50, withinCapacity: true },
//   { name: "Room C", occupancy: 55, withinCapacity: false },
//   { name: "Room D", occupancy: 30, withinCapacity: true }
// ]
