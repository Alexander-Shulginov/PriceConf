<template>
	<TheHeader />
	<SearchInput />
	<AreaSelected/>
	<AreasList />
</template>

<script>
	import { defineComponent } from "vue";
	import SearchInput from "@/components/SearchInput.vue";
	import TheHeader from "@/components/TheHeader.vue";
	import AreasList from "@/components/AreasList.vue";
	import AreaSelected from "@/components/AreaSelected.vue";

	export default defineComponent({
		name: "HomeView",

		components: {
			SearchInput,
			TheHeader,
			AreasList,
			AreaSelected,
		},
	});
</script>
