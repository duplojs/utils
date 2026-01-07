import { A, asyncInnerPipe, asyncPipe } from "@scripts";

const input = [
	{
		host: "api.local",
		retries: 1,
	},
	{
		host: "api.external",
		retries: 2,
	},
];

const result = await asyncPipe(
	input,
	A.map(
		asyncInnerPipe(
			({ host, retries }) => ({
				url: `https://${host}/health`,
				retries,
			}),
			// fake HTTP request
			async({ url, retries }) => Promise.resolve({
				url,
				status: 200,
				retries,
			}),
			({ status, url, retries }) => `${status} on ${url} (retries: ${retries})`,
		),
	),
);
// result: [
//    "result: "200 on https://api.local/health (retries: 1)",
//    "result: "200 on https://api.external/health (retries: 2)"
// ]
