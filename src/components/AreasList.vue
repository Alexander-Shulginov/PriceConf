<template>
	<v-row justify="center">
		<v-col cols="12">
			<v-list
				v-for="(area, index) in newArrItems"
				:key="index"
				class="elevation-2 mb-2"
			>
				<v-list-item>
					<v-row>
						<v-col :title.attr="area.name" cols="12" align-self="center">
							<div class="d-flex align-center justify-space-between">
								<span>{{ area.name }}</span>
								<v-btn
									@click="addNewItems(area)"
									title="Добавить"
									color="blue"
									variant="flat"
									text="Добавить"
								>
									Добавить
								</v-btn>
							</div>
						</v-col>
					</v-row>
				</v-list-item>
			</v-list>
		</v-col>
	</v-row>
</template>

<script>
	import { mapActions, mapState } from "vuex";

	export default {
		computed: {
			...mapState(["newArrItems"]),
		},

		methods: {
			...mapActions(["addItems"]),

			addNewItems(newItem) {
				this.addItems(newItem);
			},
		},
	};
</script>
