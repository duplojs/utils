import { DClean, type ExpectType } from "@scripts";

describe("createUseCase and useCaseInstances", () => {
	const UserRepository = DClean.createRepository<{
		getName(id: number): Promise<string>;
	}>();

	const LogRepository = DClean.createRepository<{
		log(message: string): void;
	}>();

	const LogUseCase = DClean.createUseCase(
		{ logRepo: LogRepository },
		({ logRepo }) => <T extends string>(message: T) => {
			logRepo.log(message);
			return message.length;
		},
	);

	const GreetUseCase = DClean.createUseCase(
		{
			userRepo: UserRepository,
			logger: LogUseCase,
		},
		({ userRepo, logger }) => async(id: number) => {
			const name = await userRepo.getName(id);
			logger(`hello ${name}`);
			return `Hello ${name}`;
		},
	);

	it("createUseCase wires repositories and nested use cases", async() => {
		const logSpy = vi.fn();
		const logImpl = LogRepository.createImplementation({
			log: logSpy,
		});

		const userImpl = UserRepository.createImplementation({
			getName: (id) => Promise.resolve(`User${id}`),
		});

		const greet = GreetUseCase.getUseCase({
			logRepo: logImpl,
			userRepo: userImpl,
		});

		const result = await greet(5);

		expect(result).toBe("Hello User5");
		expect(logSpy).toHaveBeenCalledWith("hello User5");

		type Check = ExpectType<
			typeof greet,
			(id: number) => Promise<string>,
			"strict"
		>;
	});

	it("useCaseInstances resolves all use cases with shared repositories", async() => {
		const logSpy = vi.fn();

		const repositories = {
			logRepo: LogRepository.createImplementation({
				log: logSpy,
			}),
			userRepo: UserRepository.createImplementation({
				getName: (id) => Promise.resolve(`Name${id}`),
			}),
		};

		const instances = DClean.useCaseInstances(
			{
				log: LogUseCase,
				greet: GreetUseCase,
			},
			repositories,
		);

		const greetResult = await instances.greet(2);
		const logResult = instances.log("hi");

		expect(greetResult).toBe("Hello Name2");
		expect(logResult).toBe(2);
		expect(logSpy).toHaveBeenCalledWith("hello Name2");

		type Check = ExpectType<
			typeof instances,
			{
				log<T extends string>(message: T): number;
				greet(id: number): Promise<string>;
			},
			"strict"
		>;
	});
});
