<template>
  <div id="app">
    <h2>  {{name}}</h2>
    <treeselect v-model="value" :multiple="true" :options="options" />
  
  </div>
</template>

<script>
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

import json from "/Users/joannesun/Desktop/primevue-filter/Newlend.json";

export default {
  // register the component
  components: { Treeselect },
  
  data() {
    return {
      // myJson: json,
      name: "joanne",
      value: null,
      options: this.$props.menuProp,
    };
  },
  props: ["menuProp"],
  methods:{
    render(){
      
    }
  },
  async mounted() {
    await this.render();
    
    this.options = this.$props.menuProp

    console.log(this.options)
    
// var parsedobj = JSON.parse(JSON.stringify(this.$props.menuProp))
// console.log(parsedobj)

    
  },
};
</script>
