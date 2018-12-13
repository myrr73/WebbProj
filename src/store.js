import Vue from 'vue'
import Vuex from 'vuex'
import json from '../SPRALLCLOTH.json'

Vue.use(Vuex)

export default new Vuex.Store({
  
      
 

  
  state: {
   
    bilder: [
      {
        id:1,
        name: 'img1',
        image: require('@/assets/logo.png')
      },
      // {id:1, name:'Img1', image:"@/assets/logo.png"},
      // {id:2, name:"Img2", image:"@/assets/logo.png"},
      // {id:3, name:"Img3", image:"@/assets/logo.png"},
      // {id:4, name:"Img4", image:"@/assets/logo.png"},
      // {id:5, name:"Img5", image:"@/assets/logo.png"},
      // {id:6, name:"Img6", image:"@/assets/logo.png"},
      // {id:7, name:"Img7", image:"@/assets/logo.png"},
      // {id:8, name:"Img8", image:"@/assets/logo.png"},
      // {id:9, name:"Img9", image:"@/assets/logo.png"},
      // {id:10, name:"Img10", image:"@/assets/logo.png"},
      // {id:11, name:"Img11", image:"@/assets/logo.png"},
      // {id:12, name:"Img12", image:"@/assets/logo.png"},
      // {id:13, name:"Img13", image:"@/assets/logo.png"},
      // {id:14, name:"Img14", image:"@/assets/logo.png"},
      // {id:15, name:"Img15", image:"@/assets/logo.png"},
      // {id:16, name:"Img16", image:"@/assets/logo.png"}
      
    ],

    inCart: [],
    myJson: json,
    
    
  },
 
  getters: {

    getImages: state => {
      return state.bilder;
    },
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
