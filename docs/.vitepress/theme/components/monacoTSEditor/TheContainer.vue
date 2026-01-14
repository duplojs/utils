<script setup lang="ts">
import { defineClientComponent } from "vitepress";
import type { Props } from "./TheComponent.vue";

const Monaco = defineClientComponent(() => import("./TheComponent.vue"))

const props = defineProps<Props>();
</script>

<template>
    <div
        :style="{
			width: width, 
			height: height, 
			border: '1px solid var(--vp-c-border)', 
			margin: '16px 0',
		}"
    >
		<Monaco v-bind="props"/>
	</div>
</template>
