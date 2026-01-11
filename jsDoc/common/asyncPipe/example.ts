import { asyncPipe } from "@scripts";

const input = {
	host: "api.local",
	retries: 1,
};

const result = await asyncPipe(
	input,
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
);
// result: "200 on https://api.local/health (retries: 1)"
