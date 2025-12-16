<script setup lang="ts">
import { type CSSProperties, ref } from "vue";
import { useComponent, type MajorVersion } from "./useComponent";

interface Props {
    src: string;
    majorVersion: MajorVersion;
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    readOnly?: boolean;
	foldLines?: number[];
}

const props = withDefaults(defineProps<Props>(), {
    width: "100%",
    height: "300px",
    readOnly: false,
	foldLines: () => [],
});

const container = ref<HTMLElement>();

useComponent(
	container, 
	{
		src: props.src,
		readOnly: props.readOnly,
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
			border: '1px solid var(--vp-c-border)', 
			margin: '16px 0',
		}"
    />
</template>
