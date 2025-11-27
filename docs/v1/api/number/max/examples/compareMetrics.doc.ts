import { N, A, pipe } from "@duplojs/utils";

const metrics = [
	{
		systemName: "Server A",
		cpuUsage: 45,
		memoryUsage: 60,
	},
	{
		systemName: "Server B",
		cpuUsage: 65,
		memoryUsage: 50,
	},
	{
		systemName: "Server C",
		cpuUsage: 55,
		memoryUsage: 75,
	},
];

const result = pipe(
	metrics,
	A.reduce(
		A.reduceFrom({
			maxCpu: 0,
			maxMemory: 0,
		}),
		({ element, lastValue, next }) => next({
			maxCpu: N.max(element.cpuUsage, lastValue.maxCpu),
			maxMemory: N.max(element.memoryUsage, lastValue.maxMemory),
		}),
	),
);

// result: { maxCpu: 65, maxMemory: 75 }
