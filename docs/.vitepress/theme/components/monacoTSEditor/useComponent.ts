import { onMounted, onBeforeUnmount, watch, type Ref } from "vue";
import { useData } from "vitepress";
import * as monaco from "monaco-editor";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import { useMonacoFilesStore } from "./useMonacoFilesStore";

declare global {
	interface Window {
		MonacoEnvironment: monaco.Environment;
	}
}

type Monaco = typeof monaco;

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type MajorVersion = `v${Digit}` | `v${Digit}${Digit}` | `v${Digit}${Digit}${Digit}`;

interface UseComponentOptions {
	src: string;
	readOnly: boolean;
	majorVersion: MajorVersion;
}

function initMonaco() {
	monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
		target: monaco.languages.typescript.ScriptTarget.ESNext,
		module: monaco.languages.typescript.ModuleKind.ESNext,
		moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
		allowNonTsExtensions: true,
		esModuleInterop: true,
		allowSyntheticDefaultImports: true,
		skipLibCheck: true,
		typeRoots: ["file:///node_modules/@types"],
		baseUrl: "file:///",
		paths: {
			"@duplojs/utils": ["node_modules/@duplojs/utils/index.d.ts"],
		},
	});
}

function setMonacoDeclarationTypes({
	monaco,
	dtsFiles,
	packageName,
}: {
	monaco: Monaco;
	dtsFiles: {
		path: string;
		text: string;
	}[];
	packageName: string;
}) {
	for (const { path, text } of dtsFiles) {
		const uri = `file:///node_modules/${packageName}/${path}`;
		monaco.languages.typescript.typescriptDefaults.addExtraLib(text, uri);
	}
}

function resetMonacoDeclarationTypes(monaco: Monaco) {
	monaco.languages.typescript.typescriptDefaults.setExtraLibs([]);
}

async function fetchDocCodeFile(src: string) {
	const response = await fetch(`${src}?raw`);
	if (!response.ok) {
		return "Loading file error";
	}
	return response.text();
}

export function useComponent(
	container: Ref<HTMLElement | undefined>,
	options: UseComponentOptions,
) {
	const { majorVersion, readOnly, src } = options;
	const packageName = "@duplojs/utils";
	const { isDark } = useData();
	const { loadDtsFiles } = useMonacoFilesStore();

	let editor: monaco.editor.IStandaloneCodeEditor | null = null;

	if (typeof window !== "undefined") {
		window.MonacoEnvironment = {
			getWorker: () => new tsWorker(),
		};
	}

	initMonaco();

	async function initializeEditor() {
		if (!container.value) {
			return;
		}

		const codeFile = await fetchDocCodeFile(src);

		const dtsFiles = await loadDtsFiles({
			packageName,
			majorVersion,
		});

		if (dtsFiles && dtsFiles.length > 0) {
			setMonacoDeclarationTypes({
				monaco,
				dtsFiles,
				packageName,
			});
		}

		editor = monaco.editor.create(container.value, {
			value: codeFile,
			theme: isDark.value ? "vs-dark" : "vs",
			readOnly,
			automaticLayout: true,
			language: "typescript",
			minimap: { enabled: false },
			fontSize: 14,
		});
	}

	function disposeEditor() {
		if (editor) {
			resetMonacoDeclarationTypes(monaco);
			editor.dispose();
			editor = null;
		}
	}

	watch(isDark, (newIsDark) => {
		if (editor) {
			monaco.editor.setTheme(newIsDark ? "vs-dark" : "vs");
		}
	});

	onMounted(initializeEditor);
	onBeforeUnmount(disposeEditor);

	return {
		editor: () => editor,
		initializeEditor,
		disposeEditor,
	};
}
