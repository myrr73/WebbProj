<template>
<div class="col-md-3">
           <div class="card">
              <img class="card-img-top">
              <div class="card-body">
              <h4 class="card-title">{{ product_name }}</h4>
              <div class="card-info">{{ product_info }}</div>
              <div class="card-info">{{ product_color }}</div>
              <div class="card-info">{{ gender }}</div>
              <div class="card-info">{{ size }}</div>
              <div class="card-text">{{ product_price | kronor }}</div>
              <div class="row justify-content-end">
              <button class="btn btn-primary" @click="addToCart(product_id)">Add to cart</button>
          </div>
        </div>
       </div>
     </div>
</template>

<script>


export default {
  name: 'Artiklar',
  props: ['product_id', 'product_name', 'image', 'size', 'gender', 'product_info', 'product_color','product_price'],
  methods: {
    addToCart(product_id) {
      this.$store.dispatch('addToCart', product_id);
    },
  },
  filters: {
      kronor: num => `SEK ${num / 100}`,
    },
};
</script>