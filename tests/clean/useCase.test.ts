import { DClean, type ExpectType } from "@scripts";

describe("createUseCase and useCaseInstances", () => {
	const UserRepository = DClean.createRepository<{
		getName(id: number): Promise<string>;
	}>();

	const LogRepository = DClean.createRepository<{
		log(message: string): void;
	}>();

	const LogUseCase = DClean.createUseCase(
		{ LogRepository },
		({ logRepository }) => <T extends string>(message: T) => {
			logRepository.log(message);
			return message.length;
		},
	);

	const GreetUseCase = DClean.createUseCase(
		{
			UserRepository,
			LogUseCase,
		},
		({ userRepository, logUseCase }) => async(id: number) => {
			const name = await userRepository.getName(id);
			logUseCase(`hello ${name}`);
			return `Hello ${name}`;
		},
	);

	it("createUseCase wires repositories and nested use cases", async() => {
		const logSpy = vi.fn();
		const logRepository = LogRepository.createImplementation({
			log: logSpy,
		});

		const userRepository = UserRepository.createImplementation({
			getName: (id) => Promise.resolve(`User${id}`),
		});

		const greetUseCase = GreetUseCase.getUseCase({
			logRepository,
			userRepository,
		});

		const result = await greetUseCase(5);

		expect(result).toBe("Hello User5");
		expect(logSpy).toHaveBeenCalledWith("hello User5");

		type Check = ExpectType<
			typeof greetUseCase,
			(id: number) => Promise<string>,
			"strict"
		>;
	});

	it("useCaseInstances resolves all use cases with shared repositories", async() => {
		const logSpy = vi.fn();

		const instances = DClean.useCaseInstances(
			{
				LogUseCase,
				GreetUseCase,
			},
			{
				logRepository: LogRepository.createImplementation({
					log: logSpy,
				}),
				userRepository: UserRepository.createImplementation({
					getName: (id) => Promise.resolve(`Name${id}`),
				}),
			},
		);

		const greetResult = await instances.greetUseCase(2);
		const logResult = instances.logUseCase("hi");

		expect(greetResult).toBe("Hello Name2");
		expect(logResult).toBe(2);
		expect(logSpy).toHaveBeenCalledWith("hello Name2");

		type Check = ExpectType<
			typeof instances,
			{
				logUseCase<T extends string>(message: T): number;
				greetUseCase(id: number): Promise<string>;
			},
			"strict"
		>;
	});

	it("override usecase dependencies", async() => {
		const logSpy = vi.fn();
		const logRepository = LogRepository.createImplementation({
			log: logSpy,
		});

		const userRepository = UserRepository.createImplementation({
			getName: (id) => Promise.resolve(`User${id}`),
		});

		const useCaseLogSpy = vi.fn(() => 1);

		const greetUseCase = GreetUseCase.getUseCase({
			logRepository,
			userRepository,
			logUseCase: useCaseLogSpy,
		});

		const result = await greetUseCase(1);

		expect(result).toBe("Hello User1");
		expect(logSpy).not.toHaveBeenCalled();
		expect(useCaseLogSpy).toHaveBeenCalledOnce();
	});
});
