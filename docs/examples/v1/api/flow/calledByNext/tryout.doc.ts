import { F } from "@duplojs/utils";

const loadUsersFlow = F.create(
	async function *(page: number) {
		const controller = new AbortController();

		yield *F.calledByNext(() => controller.abort());

		const response = await fetch(
			`/api/users?page=${page}`,
			{
				signal: controller.signal,
			},
		);

		return response.json();
	},
);

const loadUsers = F.toFunction(loadUsersFlow);

const firstRequest = loadUsers(1);
const secondRequest = loadUsers(2);
// The second call aborts the first pending fetch.
