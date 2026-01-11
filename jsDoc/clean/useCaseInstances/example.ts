import { C } from "@scripts";

interface UserRepository {
	findById(id: number): Promise<string | null>;
}

const UserRepository = C.createRepository<UserRepository>();

const FindUser = C.createUseCase(
	{ UserRepository },
	({ userRepository }) => async(id: number) => userRepository.findById(id),
);

const CountUser = C.createUseCase(
	{ UserRepository },
	({ userRepository }) => async() => (await userRepository.findById(1) ? 1 : 0),
);

const repository = UserRepository.createImplementation({
	findById(id) {
		return Promise.resolve(id === 1 ? "Ada" : null);
	},
});

const useCases = C.useCaseInstances(
	{
		FindUser,
		CountUser,
	},
	{ userRepository: repository },
);
