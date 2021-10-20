<template>
  <div id="productTree">
    <treeselect v-model="value" :multiple="true" :options="options" />
  </div>
</template>

<script>
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  // register the component
  components: { Treeselect },
   name:"ProductTRee",
  data() {
    return {
      // myJson: json,
      value: null,
      options: this.$props.menuProductProp,
    };
  },
  props: ["menuProductProp"],
  methods:{
    render(){
      
    }
  },
  async mounted() {
    await this.render();
    
    this.options = this.$props.menuProductProp

    console.log(this.options)
    
// var parsedobj = JSON.parse(JSON.stringify(this.$props.menuProp))
// console.log(parsedobj)

    
  },
};
</script>
