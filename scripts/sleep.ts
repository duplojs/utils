export function sleep(milliseconde?: number) {
	return new Promise<void>((resolve) => void setTimeout(resolve, milliseconde));
}
