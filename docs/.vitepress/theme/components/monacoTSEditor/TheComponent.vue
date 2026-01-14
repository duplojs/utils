<script setup lang="ts">
import { type CSSProperties, ref } from "vue";
import { useComponent, type MajorVersion } from "./useComponent";

export interface Props {
    src: string;
    majorVersion: MajorVersion;
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    canWrite?: boolean;
	foldLines?: number[];
}

const props = withDefaults(defineProps<Props>(), {
    width: "100%",
    height: "300px",
	canWrite: false,
	foldLines: () => [],
});

const container = ref<HTMLElement>();

useComponent(
	container, 
	{
		src: props.src,
		canWrite: props.canWrite,
		majorVersion: props.majorVersion,
		foldLines: props.foldLines,
	}
);
</script>

<template>
    <div
        ref="container"
        :style="{
			width: width, 
			height: height,
		}"
    />
</template>
