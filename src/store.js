import Vue from 'vue'
import Vuex from 'vuex'
import json from '../SPRALLCLOTH.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[
      {id:0,name:"Bananas", price:10},
      {id:1,name:"Apples", price:20},
      {id:2,name:"Peaches", price:30},
      {id:3,name:"Pineapple", price:40},
      {id:4,name:"Pears", price:50},

    ],
    myJson: json
  },

  getters: {
    getProducts: state => {
      return state.myJson;
    }
  },
  mutations: {

  },
  actions: {

  }
})
