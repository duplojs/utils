<script setup lang="ts">
import { CSSProperties, ref } from "vue";
import { useComponent, type MajorVersion } from "./useComponent";

interface Props {
    src: string;
    majorVersion: MajorVersion;
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    readOnly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    width: "100%",
    height: "300px",
    readOnly: false,
});

const container = ref<HTMLElement>();

useComponent(
	container, 
	{
		src: props.src,
		readOnly: props.readOnly,
		majorVersion: props.majorVersion,
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