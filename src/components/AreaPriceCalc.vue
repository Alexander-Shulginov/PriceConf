<template>
	<div>
		<v-row class="mb-3 pb-3" style="border-bottom: 1px solid">
			<v-col justify="center">
				<div class="d-flex align-center">
					<div>
						<div class="pr-3">Базовая стоимость доставки:</div>
						<div v-if="basePriceIsEmpty" class="text-red pr-3">
							Укажите базовую стоимость
						</div>
					</div>
					<v-text-field
						reverse
						v-model="basePrice"
						@keydown="validateInputBasePrice"
						@input="hideErrorBasePrice"
						type="number"
						hide-details
						variant="outlined"
						density="compact"
						placeholder="320.00"
						class="w-25 flex-grow-0 mr-2"
					></v-text-field>
					<span>₽</span>
					<v-btn class="ml-auto" @click="addInput" variant="flat" color="green">
						Добавить наценку
					</v-btn>
				</div>
			</v-col>
		</v-row>
		<v-row align="center" v-for="(value, index) in modelValues" :key="index">
			<v-col cols="5">
				<div class="d-flex align-center">
					<div class="d-flex align-center w-100">
						<v-text-field
							hide-details
							variant="outlined"
							density="compact"
							reverse
							v-model="minWeight[index]"
							type="number"
							placeholder="1.000"
							class="mr-1"
						></v-text-field>
						<span>кг</span>
					</div>
					<span class="mx-3">-</span>
					<div class="d-flex align-center w-100">
						<v-text-field
							hide-details
							variant="outlined"
							v-model="maxWeight[index]"
							density="compact"
							type="number"
							reverse
							placeholder="3.000"
							class="mr-1"
						></v-text-field>
						<span>кг</span>
					</div>
				</div>
			</v-col>
			<v-col cols="4">
				<div class="d-flex mt-5 align-center w-75 ml-auto">
					<v-text-field
						hide-details
						variant="outlined"
						v-model="modelValues[index]"
						type="number"
						density="compact"
						reverse
						placeholder="+50.00"
						class="mr-3"
					></v-text-field>
					<span>₽</span>
				</div>
				<v-row>
					<v-col cols="12" offset="3">
						<span>Итоговая стоимость: {{ calculateResult(value) }} ₽</span>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="3">
				<v-btn @click="removeInput(index)" variant="flat" color="red-lighten-1">
					Удалить наценку
				</v-btn>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-btn @click="checkValidate" color="green">Сохранить</v-btn>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				modelValues: [],
				basePrice: "",
				basePriceIsEmpty: false,
				minWeight: [],
				maxWeight: [],
			};
		},

		methods: {
			validateInputBasePrice(event) {
				if (event.key === "+" || event.key === "-") {
					event.preventDefault();
				}
			},

			addInput() {
				this.modelValues.push("");
			},

			removeInput(index) {
				this.modelValues.splice(index, 1);
			},

			calculateResult(value) {
				return Number(this.basePrice) + Number(value);
			},

			checkValidate() {
				if (!this.basePrice) {
					this.basePriceIsEmpty = true;
				}
			},

			hideErrorBasePrice() {
				this.basePriceIsEmpty = false;
			},
		},
	};
</script>

<style>
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
