<template>

  <div id="app">
    <!-- <div id="bg"></div> -->
    <div id="banner"> <img alt="" src="./assets/sprallig.svg"></div>

    <div id="nav">
      <div id="inner">
      <router-link tag="li" to="/">Hem</router-link> 
      <router-link tag="li" to="/butik">Butik</router-link> 
      <router-link tag="li" to="/omoss">Om Oss</router-link>
      <router-link tag="li" to="/Kundvagn">Kundvagn</router-link>
      </div>
    </div>
    
    <router-view/>
    <section></section>
    <div id="foot">
      <p>tobMyr projekt 2018</p>
    </div>
  </div>
</template>

<style lang="scss">

body, #app {
  border: 0;
  padding: 0;
  margin: 0;
}

// #bg {
//   background-color:rgba(141, 141, 141, 0.76);
//   position:absolute;
//   width: 100%;
//   height: 100%;
//   z-index: -1;

// }

#app{
  

  background-color:rgba(141, 141, 141, 0.76);
  
  
    
    #banner {
      min-height: 5vh;
      max-height: 10vh;
      width: 100%;
      
      img{
          max-height: 50px;
          width: 100%;
      }
    }

  #nav {
   
    background-color:rgba(141, 141, 141, .6);
    padding: 5px 0;
    border-radius: 5px;
    width: 100%;
    margin:auto;
    box-shadow: 0 10px 30px rgba(0,0,0,.15);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-style:italic;
    position: relative;
    
    #inner{
      margin: 0 auto;
      max-width: 1200px;
      text-align: center;
      
    }
    

    #cart {
      

    }
    

      
  li{
    list-style-type: none;
    display: inline-block;
    margin: 10px 10px 10px 10px;
    &.router-link-exact-active{
        text-decoration: underline;
      }
    
    
  }
}
      section{

        flex:1;
      }
      #foot {
        display: flex;
        justify-content: center;
        

      }

}

</style>
