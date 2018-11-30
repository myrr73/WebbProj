import Vue from 'vue'
import Vuex from 'vuex'
import json from '../SPRALLCLOTH.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    inCart: [],
    myJson: json,
    
    
  },
 
  getters: {
    getProducts: state => {
      return state.myJson;
    },
    inCart: state=>{
      return state.inCart;
    },
  },
  mutations: {
    ADD_TO_CART(state, product_id) { state.inCart.push(product_id); },
    
  },
  

  actions: {
    addToCart(product_id) { commit('ADD_TO_CART', product_id); },
  },
})
