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
      return state.myJson.inStock;
    },
    inCart: state=>{
      return state.inCart;
    },
    
  },
  mutations: {
    ADD_TO_CART(state, id) { state.inCart.push(id); },

    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1);},
    
  },
  

  actions: {
    addToCart(context, id) { context.commit('ADD_TO_CART', id); },

    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },

    
  
  
})
