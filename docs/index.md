<script setup>
import { onMounted } from "vue";
import { useRouter } from "vitepress";

const router = useRouter();

onMounted(() => {
	const preferredLanguage = typeof navigator !== "undefined" ? navigator.language : "en";
	router.go(preferredLanguage.toLowerCase().startsWith("fr") ? "/fr" : "/en");
});
</script>
