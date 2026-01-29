import * as DEither from "@scripts/either";
import type { AnyTuple } from "./types";

export namespace Path {
	export const baseNameRegex = /\/?([^/]+)$/;
	export const folderNameRegex = /([^]+)\/[^/]+\/?$/;
	export const extensionNameRegex = /\.([^./]+)$/;
	export const isRelativeRegex = /(^|\/)\.\.(?=\/|$)/;
	export const segmentTrailingRegex = /\/$/;
	export const segmentRelativeRegex = /^(.\/)/;

	export interface GetBaseNameParams {
		removeExtension?: boolean;
	}

	/**
	 * {@include common/path/getBaseName/index.md}
	 */
	export function getBaseName<
		GenericPath extends string,
	>(
		path: GenericPath,
		params?: GetBaseNameParams,
	): string | null {
		const match = baseNameRegex.exec(path);

		if (!match) {
			return null;
		}

		if (params?.removeExtension) {
			return match[1]!.replace(extensionNameRegex, "");
		}

		return match[1]!;
	}

	/**
	 * {@include common/path/getExtensionName/index.md}
	 */
	export function getExtensionName<
		GenericPath extends string,
	>(path: GenericPath): string | null {
		const match = extensionNameRegex.exec(path);

		if (match) {
			return match[1]!;
		}

		return null;
	}

	/**
	 * {@include common/path/getParentFolderPath/index.md}
	 */
	export function getParentFolderPath<
		GenericPath extends string,
	>(path: GenericPath) {
		const match = path.match(folderNameRegex);

		if (!match) {
			return null;
		}

		return match[1]!;
	}

	/**
	 * {@include common/path/isAbsolute/index.md}
	 */
	export function isAbsolute<
		GenericPath extends string,
	>(
		path: GenericPath,
	): boolean {
		return path.startsWith("/")
		&& !isRelativeRegex.test(path);
	}

	/**
	 * {@include common/path/resolveFrom/index.md}
	 */
	export function resolveFrom<
		GenericSegment extends string,
	>(
		origin: string,
		segments: AnyTuple<GenericSegment>,
	): DEither.Fail | DEither.Success<string> {
		const result = resolveRelative([origin, ...segments]);

		return isAbsolute(result)
			? DEither.success(result)
			: DEither.fail();
	}

	/**
	 * {@include common/path/resolveRelative/index.md}
	 */
	export function resolveRelative<
		GenericSegment extends string,
	>(
		segments: AnyTuple<GenericSegment>,
	): string {
		let clearedPath = "";

		for (const segment of segments) {
			if (segment.length === 0) {
				continue;
			}

			if (segment === "/") {
				clearedPath = segment;
				continue;
			}

			const formattedSegment = segment
				.replace(segmentTrailingRegex, "")
				.replace(segmentRelativeRegex, "");

			if (formattedSegment.startsWith("/")) {
				clearedPath = formattedSegment;
				continue;
			}

			if (clearedPath === "/") {
				clearedPath += formattedSegment;
			} else {
				clearedPath += `/${formattedSegment}`;
			}
		}

		const dotResult: ".."[] = [];
		const result: string[] = [];

		for (const element of clearedPath.split("/")) {
			if (element === "..") {
				const deletedElement = result.pop();

				if (!deletedElement) {
					dotResult.push(element);
				}
			} else {
				result.push(element);
			}
		}

		if (dotResult.length === 0) {
			return result.join("/");
		}

		return `${dotResult.join("/")}/${result.join("/")}`;
	}

}
