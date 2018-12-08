<template>
<div class="col-md-5">
           <div class="card">
              <img class="card-img-top">
              <div class="card-body">
              <h5 class="card-title">{{ productName }}</h5>
              <div class="card-info">{{ productInfo }}</div>
              <div class="card-info">{{ color }}</div>
              <div class="card-info">{{ size }}</div>
              <div class="card-text">SEK: {{ productPrice }}:-</div>
              <div class="row justify-content-end">
              <button id="bluebutt" class="btn btn-outline-dark" @click="addToCart(id)"><a>Lägg till i kundvagn</a></button>
          </div>
        </div>
       </div>
     </div>
              
</template>



<script>

export default {
  name: 'Artiklar',
  props: ['id', 'productName','size', 'productInfo', 'color','productPrice'],
  methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id);
    },
  },
  
};
</script>

<style lang="scss" scoped>

#bluebutt {
  box-shadow: 0 10px 30px rgba(0,0,0, .3);
}
#bluebutt:active{
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.card-body{
  box-shadow: 0 10px 30px rgba(0,0,0, .3);
  margin-bottom: 10px;
}


</style>
