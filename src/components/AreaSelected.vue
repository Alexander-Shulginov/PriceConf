<template>
	<v-row justify="center">
		<v-col>
			<v-list
				v-for="(area, index) in sortedArea"
				:key="index"
				class="elevation-3 mb-8 bg-grey-lighten-3"
			>
				<v-list-item class="mb-3 pb-3" style="border-bottom: 1px solid">
					<v-row>
						<v-col>
							<div class="d-flex justify-space-between">
								<span class="text-h5">{{ area.name }}</span>
								<v-btn
									@click="removeChoisenZone(area.id)"
									title="Удалить"
									color="red-lighten-1"
									variant="flat"
								>
									Удалить
								</v-btn>
							</div>
						</v-col>
					</v-row>
				</v-list-item>
				<div class="pa-3 rounded bg-grey-lighten-3">
					<AreaPriceCalc />
				</div>
			</v-list>
		</v-col>
	</v-row>
</template>

<script>
	import AreaPriceCalc from "@/components/AreaPriceCalc.vue";
	import { mapActions, mapState } from "vuex";

	export default {
		components: {
			AreaPriceCalc,
		},

		computed: {
			...mapState(["choiseArr"]),
			sortedArea() {
				return this.choiseArr.sort((a, b) => a.name.localeCompare(b.name));
			},
		},

		methods: {
			...mapActions(["removeItems"]),
			removeChoisenZone(id) {
				this.removeItems(id);
			},
		},
	};
</script>
