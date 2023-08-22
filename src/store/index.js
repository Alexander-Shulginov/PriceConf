import { createStore } from "vuex";
import areasData from "@/data/rate-areas.json";

export default createStore({
	state: {
		initArrItems: areasData,
		newArrItems: areasData,
		choiseArr: [],
	},

	mutations: {
		changeItem(state, items) {
			state.newArrItems = items;
		},

		addItem(state, item) {
			state.choiseArr.push(item);
		},

		removeItem(state, item) {
			state.choiseArr = item;
		},
	},

	actions: {
		filterItems({ state, commit }, inputValue) {
			const filteredItems = state.initArrItems.filter((item) =>
				item.name.toLowerCase().includes(inputValue.toLowerCase().trim())
			);
			commit("changeItem", filteredItems);
		},

		addItems({ state, commit }, newItem) {
			if (!state.choiseArr.some((existingItem) => existingItem.id === newItem.id)) {
				commit("addItem", newItem);
			}
		},

		removeItems({ state, commit }, id) {
			const filteredArr = state.choiseArr.filter((item) => item.id !== id);
			commit("removeItem", filteredArr);
		},
	},
});
