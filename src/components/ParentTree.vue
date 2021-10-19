<template>
  <div class="hello">
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

export default {
  name: "ChildTree",
  data() {
    return {
      myJson: json,
      menu: [],
    };
  },
  methods: {
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
          children.push({
            id: industries[key].children[key2].child,
            label: industries[key].children[key2].child,
          });
        }
        item.children = children;
        for (var key2 in industries[key].parent) {
          item.id = industries[key].parent.child;
          item.label = industries[key].parent.child;
          //console.log(industries[key].parent.child)
        }
        multiselect.push(item);
      }

      //console.log("VVVVVV");
      //console.log(multiselect);
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
