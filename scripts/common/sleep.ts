export function sleep(millieSeconde?: number) {
	return new Promise<void>((resolve) => void setTimeout(resolve, millieSeconde));
}
