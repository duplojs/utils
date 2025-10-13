import { readdir, writeFile, stat } from "fs/promises";
import { join } from "path";

/**
 * @typedef {Object} FileStructure
 * @property {string} name
 * @property {FileStructure[]} [files]
 */

/**
 * @typedef {Object} Metadata
 * @property {string} name
 * @property {FileStructure[]} files
 */

/**
 * @param {string} dirPath
 * @param {string} [relativePath=""]
 * @returns {Promise<FileStructure[]>}
 */
async function scanDirectory(dirPath, relativePath = "") {
	const items = await readdir(dirPath);
	/** @type {FileStructure[]} */
	const files = [];

	for (const item of items) {
		const fullPath = join(dirPath, item);
		const stats = await stat(fullPath);

		if (stats.isDirectory()) {
			const subFiles = await scanDirectory(fullPath, join(relativePath, item));
			files.push({
				name: item,
				files: subFiles,
			});
		} else {
			files.push({
				name: item,
			});
		}
	}

	return files;
}

/**
 * @param {string} distPath
 * @returns {Promise<Metadata>}
 */
async function generateMetadata(distPath) {
	const files = await scanDirectory(distPath);

	return {
		name: "@duplojs/utils",
		files,
	};
}

/**
 * @returns {import('rollup').Plugin}
 */
export function generateMetadataPlugin() {
	return {
		name: "generate-metadata",
		writeBundle: async (options) => {
			if (!options.dir) {
				return;
			}

			try {
				const metadata = await generateMetadata(options.dir);
				const metadataPath = join(options.dir, "metadata.json");
				await writeFile(metadataPath, JSON.stringify(metadata, null, 2));
			} catch (error) {
				console.error("Error: Generation metadata file", error);
			}
		},
	};
}