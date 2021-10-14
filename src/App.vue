<template>
  <div id="app">

<MultiSelect v-model="selectedCars" :options="cars" optionLabel="brand" placeholder="Select Brands" />
<MultiSelect v-model="selectedCars" :options="cars" optionLabel="brand" placeholder="Select Brands" />
<MultiSelect v-model="selectedCars" :options="cars" optionLabel="brand" placeholder="Select Brands" />
  </div>
</template>

<script>


export default {
  data() {
	return {
		selectedCars: null,
		cars: [
			{brand: 'Audi', value: 'Audi'},
			{brand: 'BMW', value: 'BMW'},
			{brand: 'Fiat', value: 'Fiat'},
			{brand: 'Honda', value: 'Honda'},
			{brand: 'Jaguar', value: 'Jaguar'},
			{brand: 'Mercedes', value: 'Mercedes'},
			{brand: 'Renault', value: 'Renault'},
			{brand: 'Volkswagen', value: 'Volkswagen'},
			{brand: 'Volvo', value: 'Volvo'}
		]
	}
}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
