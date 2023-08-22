<template>
	<v-row justify="center">
		<v-col>
			<v-text-field
				v-model="searchQuery"
				@input="inputHandler"
				label="Искать тарифную зону по названию"
				variant="outlined"
				color="blue"
			></v-text-field>
		</v-col>
	</v-row>
</template>

<script>
	import { mapActions } from "vuex";

	export default {
		data() {
			return {
				searchQuery: "",
			};
		},

		methods: {
			...mapActions(["filterItems"]),

			inputHandler() {
				this.filterItems(this.searchQuery);
			},
		},
	};
</script>
