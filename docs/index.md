<script setup>
import { onMounted } from "vue";
import { useRouter } from "vitepress";

const router = useRouter();

onMounted(() => {
	const preferredLanguage = typeof navigator !== "undefined" ? navigator.language : "fr";
	router.go(preferredLanguage.toLowerCase().startsWith("en") ? "/en" : "/fr");
});
</script>
