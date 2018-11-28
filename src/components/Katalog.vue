<template>
    <section id="Katalog">
        
        <ul>
            <li v-for="products in getProducts" v-bind:key="products.id">
                {{products.product_name}} asd , {{products.size}},asd  {{products.gender}}, dsd{{products.product_price}}, {{products.product_info}} , {{products.product_color}}
            </li>
        </ul>
      </section>
    
</template>

<script>
export default {
    name: 'Katalog',
    computed: {
        getProducts (){
          //return this.$store.state.myJson;
          return this.$store.getters.getProducts;
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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


