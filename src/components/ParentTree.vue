<template>
  <div class="hello">
    <button v-on:click="getProductType">Do it</button>

    <ul
      v-for="(item, indexProduct) in myJson.filter_items.product_types"
      :key="'A'+indexProduct"
    >
      <li>
        <b>{{ item.product_type_name }}</b>

        <!-- {{item.sub_products}} -->
      </li>
      <ul
        v-for="(subProduct, indexSubProduct) in item.sub_products"
        :key="indexSubProduct"
      >
        <li>
          {{ subProduct.product_type_name }}
        </li>
      </ul>
    </ul>

    <!-- Asset Type of Equipment  -->
    <button v-on:click="gethis">click me</button>
    <ul
      v-for="(item, indexParent) in myJson.filter_items.industries"
      :key="indexParent"
    >
      <li>
        <b>{{ item.parent.child }}</b>
      </li>
      <!-- <li>{{item.children}}</li> -->
      <ul v-for="(children, indexChild) in item.children" :key="indexChild">
        <li>{{ children.child }}</li>
      </ul>
      <!-- <li>{{item}}</li> -->
      <!-- <li v-for="(item, key) in service" :key="key">{{key}}: {{item}}</li> -->
    </ul>
    <!-- {{myJson.filter_items.industries[0].parent}} -->
  </div>
</template>

<script>
import json from "/Users/joannesun/Desktop/primevue-filter/Newlend.json";

function menu(id, label, children) {
  this.id = id;
  this.label = label;
  this.children = children;
}

function menuProduct(id, label, subProduct) {
  this.id = id;
  this.label = label;
  this.subProduct = subProduct;
}

export default {
  name: "ChildTree",
  data() {
    return {
      myJson: json,
      menu: [],
      menuProduct: [],
    };
  },
  methods: {
    getProductType() {
      var pro = this.myJson.filter_items.product_types;

      // get product object
      var productTypes = [];
      for (var key2 of Object.keys(pro)) {
        //  console.log(pro[key]);
        // console.log('hi');
        productTypes.push(pro[key2]);
      }

      // get data to align with multiselect format
      var multiselectProduct = [];

      for (var key in productTypes) {
        var item = new menuProduct();
        var subProduct = [];

        for (var key2 in productTypes[key].sub_products) {
          // console.log('hi');
          //console.log(productTypes[key].sub_products[key2].product_type_name);
          subProduct.push({
            id: productTypes[key].sub_products[key2].product_type_name,
            label: productTypes[key].sub_products[key2].product_type_name,
          });
        }
        //console.log(subProduct);
        item.subProduct = subProduct;
        //console.log(subProduct);
        for (var key3 in productTypes[key]) {
          //console.log(productTypes[key]);
          item.id = productTypes[key].product_type_name;
          item.label = productTypes[key].product_type_name;
        }
        multiselectProduct.push(item);
        //console.log(multiselectProduct);
      }
      this.menuProduct = multiselectProduct;
      console.log(this.menuProduct);
    },

    gethis() {
      var p = this.myJson.filter_items.industries;
      //console.log(p)
      //console.log(p)
      var industries = [];
      for (var key of Object.keys(p)) {
        industries.push(p[key]);
        // for (var inside of key){
        //      //console.log(inside);
        // }
      }

      var multiselect = [];

      for (var key in industries) {
        var item = new menu();
        var children = [];
        for (var key2 in industries[key].children) {
          console.log(industries[key].children[key2].child);
          children.push({
            id: industries[key].children[key2].child,
            label: industries[key].children[key2].child,
          });
        }
        // console.log('what?');
        // console.log(children);
        item.children = children;
        //console.log(children);
        for (var key2 in industries[key].parent) {
          item.id = industries[key].parent.child;
          item.label = industries[key].parent.child;
          //console.log(industries[key].parent.child)
        }
        multiselect.push(item);
      }

      //console.log("VVVVVV");
      // console.log(multiselect);
      this.menu = multiselect;
    },
  },
};
</script>


<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
