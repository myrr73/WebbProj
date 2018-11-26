<template>

  <div id="app">
    <div id="bg"></div>
    <div id="nav">
      <router-link tag="li" to="/"><a>Hem</a></router-link> 
      <router-link tag="li" to="/butik"><a>Butik</a></router-link> 
      <router-link tag="li" to="/omoss"><a>Om Oss</a></router-link>
    </div>
    <router-view/>
    <section></section>
    <div id="foot"></div>
  </div>
</template>

<style lang="scss">
#bg {
  background:rgba(227, 222, 192, 0.5);
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

}

#app{
    

  #nav {
    background:rgba(227, 222, 192, .0);
    padding: 20px;
    border-radius: 5px;
    margin:auto;
    box-shadow: 0 10px 30px rgba(0,0,0,.0);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 30px;
    position: relative;
    display: inline-block;
    color: rgb(238, 207, 160);
    

      
  li{
    list-style-type: none;
    display: inline-block;
    margin: 10px 10px 10px 10px;
    
  }
}
   a{
      color:rgb(174, 150, 114);
      text-decoration: none;
    }
      
      a:hover{
        color: lightgrey;
      }

}

</style>
