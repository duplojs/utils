import { A, pipe, type ExpectType } from "@duplojs/utils";

const users = ["alice", "bob", "charlie"];

if (A.maxElements(users, 10)) {
	const limitedUsers = A.castMaxElements(users, 15);

	type check = ExpectType<
		typeof limitedUsers,
		string[] & A.MaxElements<10> & A.MaxElements<15>,
		"strict"
	>;
}

const selectedUsers = ["alice", "bob"];

if (A.maxElements(selectedUsers, 8)) {
	const limitedSelectedUsers = pipe(
		selectedUsers,
		A.castMaxElements(16),
		A.castMaxElements(12),
	);

	type checkPipe = ExpectType<
		typeof limitedSelectedUsers,
		string[] & A.MaxElements<8> & A.MaxElements<12> & A.MaxElements<16>,
		"strict"
	>;
}
