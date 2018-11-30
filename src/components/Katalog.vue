<template>
    <section id="Katalog" class="container-my-5">
      <div class="col-md-3">
        <Kundvagn/>
    </div>
        <div class="row">
      <Artiklar
        v-for="products in getProducts"
        :key="products.product_id"
        :product_id="products.product_id"
        :product_name="products.product_name"
        :image="products.image"
        :product_price="products.product_price  " 
        :gender="products.gender" 
        :product_info="products.product_info" 
        :product_color="products.product_color" 
        :size="products.size" />
    </div>
    
   </section>
    
</template>

<script>

import Artiklar from './Artiklar.vue'
import Kundvagn from './Kundvagn.vue'



export default {
    name: 'Katalog',
    computed: {
        getProducts (){
          //return this.$store.state.myJson;
          return this.$store.getters.getProducts;
        },

        inCart (){
          // return this.$store.state.inCart;
          return this.$store.getters.inCart;
        }
      
    },
    
    components: {
      Artiklar,
      Kundvagn,
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>


