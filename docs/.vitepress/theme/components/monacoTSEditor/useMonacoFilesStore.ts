import { ref, computed } from "vue";
import type { MajorVersion } from "./useComponent";

interface FileMetadata {
	name: string;
	files?: FileMetadata[];
}

interface VersionMetadata {
	name: string;
	majorVersion: string;
	files: FileMetadata[];
}

type DTSFilePathPattern = `${string}.d.ts`;

interface DtsFile {
	path: DTSFilePathPattern;
	text: string;
}

function isDtsFilePath(path: string): path is DTSFilePathPattern {
	return path.endsWith(".d.ts");
}

const loadingPromises = new Map<string, Promise<DtsFile[]>>();
const dtsFilesCache = ref(new Map<string, DtsFile[]>());

async function fetchVersionMetadata({
	majorVersion,
}: {
	majorVersion: MajorVersion;
}): Promise<VersionMetadata | null> {
	try {
		const res = await fetch(`/libs/${majorVersion}/metadata.json`);
		if (!res.ok) {
			return null;
		}
		return await res.json();
	} catch {
		return null;
	}
}

function collectDtsFilesPaths(
	files: FileMetadata[],
	path = "",
): DTSFilePathPattern[] {
	const dtsFiles: DtsFile["path"][] = [];
	for (const file of files ?? []) {
		if (file.name.endsWith(".d.ts")) {
			const dtsPath = `${path}${file.name}`;
			if (isDtsFilePath(dtsPath)) {
				dtsFiles.push(dtsPath);
			}
		}
		if (file.files) {
			dtsFiles.push(...collectDtsFilesPaths(file.files, `${path}${file.name}/`));
		}
	}
	return dtsFiles;
}

async function fetchFilesContent({
	majorVersion,
	paths,
}: {
	majorVersion: MajorVersion;
	paths: DTSFilePathPattern[];
}): Promise<DtsFile[]> {
	return Promise.all(
		paths.map(async(path) => {
			try {
				const res = await fetch(`/libs/${majorVersion}/${path}`);
				if (!res.ok) {
					return {
						path,
						text: "",
					};
				}
				return {
					path,
					text: await res.text(),
				};
			} catch {
				return {
					path,
					text: "",
				};
			}
		}),
	);
}

async function fetchLocalDtsFiles({
	majorVersion,
}: {
	majorVersion: MajorVersion;
}): Promise<DtsFile[]> {
	const metadata = await fetchVersionMetadata({ majorVersion });
	if (metadata) {
		const dtsFilesPaths = collectDtsFilesPaths(metadata.files);
		const filesContent = await fetchFilesContent({
			majorVersion,
			paths: dtsFilesPaths,
		});
		return filesContent.filter((file) => file.text !== "");
	}

	try {
		const res = await fetch(`/libs/${majorVersion}/index.d.ts`);
		if (!res.ok) {
			return [];
		}
		return [
			{
				path: "index.d.ts",
				text: await res.text(),
			},
		];
	} catch {
		return [];
	}
}

export function useMonacoFilesStore() {
	async function loadDtsFiles({
		packageName,
		majorVersion,
	}: {
		packageName: string;
		majorVersion: MajorVersion;
	}): Promise<DtsFile[]> {
		const cacheKey = `${packageName}@${majorVersion}`;

		const cached = dtsFilesCache.value.get(cacheKey);
		if (cached) {
			return cached;
		}

		const existingPromise = loadingPromises.get(cacheKey);
		if (existingPromise) {
			return existingPromise;
		}

		const loadingPromise = fetchLocalDtsFiles({ majorVersion })
			.then((files) => {
				dtsFilesCache.value.set(cacheKey, files);
				loadingPromises.delete(cacheKey);
				return files;
			})
			.catch((error) => {
				loadingPromises.delete(cacheKey);
				throw error;
			});

		loadingPromises.set(cacheKey, loadingPromise);
		return loadingPromise;
	}

	const getCachedFiles = computed(
		() => (cacheKey: string) => dtsFilesCache.value.get(cacheKey),
	);

	function clearCache(cacheKey?: string) {
		if (cacheKey) {
			dtsFilesCache.value.delete(cacheKey);
		} else {
			dtsFilesCache.value.clear();
		}
	}

	return {
		loadDtsFiles,
		getCachedFiles,
		clearCache,
	};
}
