<template>
<div>
    <button class="btn btn-primary" data-toggle="modal" data-target="#Kundvagn"> Kundvagn ({{ artInCart }})</button>
    <div id="Kundvagn" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Kundvagn</h5>
                    <button class="close" data-dismiss="modal">
                    &times;
                    </button>
                </div>
            <div class="modal-body">
                <table class="table">
                    <tbody>
                        <tr v-for="products in cart" >
                        <td>{{ products.product_name }}</td>
                        <td>{{ products.product_price | {kronor} }}</td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>{{ summa }}</th>
                        </tr>   
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Fortsätt shoppa</button>
            <button class="btn btn-primary">Gå till kundvagn</button>
            </div>
            </div>
        </div>
    </div>
</div> 
</template>



<script>




export default {
  name: 'Kundvagn',
  
  computed: {
      artInCart() {return this.$store.getters.inCart.length; },
      summa() {
      return this.cart.reduce((acc, cur) => acc += cur.product_price, 0);
        
    },
    //            <-- cart() -->  
    // #1 .map gör så den loopar igenom min inCart array som innehåller arrayId för alla produkter där
    // #2 varje loop använder den .find som kollar igenom min getProducts array(lokalJson).
    // #3 .find plockar ut de produkter ur getProducts vars id matchar inCart id
   cart() {
      return this.$store.getters.inCart.map((cartArt) => {
        return this.$store.getters.getProducts.find((getProductsArt) => {
          return cartArt === getProductsArt.product_id;
        });
      });
    },
  },
    
  filters: {
      kronor: num => `SEK ${num / 100}`,
    },
  
};
</script>