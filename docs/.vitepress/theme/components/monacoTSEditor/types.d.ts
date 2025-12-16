declare module "monaco-editor/esm/vs/language/typescript/ts.worker?worker" {
	interface TsWorker {
		new(): Worker
	}
	const TsWorker: TsWorker;
	export default TsWorker;
}