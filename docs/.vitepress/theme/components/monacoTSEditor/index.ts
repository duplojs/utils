import { defineClientComponent } from "vitepress";

export const MonacoTSEditor = defineClientComponent(() => import("./TheComponent.vue"));
