<template>
    <div id="Katalog" class="container-my-5">
      <div class="col-md-3">
        <Kundvagn/>
    </div>
        <div class="row">
      <Artiklar
        v-for="products in getProducts"
        :key="products.id"
        :id="products.id"
        :productName="products.name"
        :productPrice="products.price  " 
        :productInfo="products.info" 
        :color="products.color" 
        :size="products.size"/>

        

    </div>
        
    
   </div>
    
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


