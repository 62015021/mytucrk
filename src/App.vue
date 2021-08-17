<template  >
  <div id="app">
    
      <v-parallax
        height="1080px"
        src="https://firebasestorage.googleapis.com/v0/b/dbturck.appspot.com/o/backgroung1.png?alt=media&token=dc06113e-5d57-4977-a22a-76f633d426a1"
      >
      <br>
        <v-card  height="1080px" color="#E3F2FD">
          <v-responsive  height="1080px" >
          <router-view  ></router-view>
          </v-responsive>
        </v-card>
        <br>
        
      </v-parallax>
      
    
    
  </div>
  
</template>

<script>

// import Navbar from "./components/navbar.vue"
// 
  export default {
    // components: {
    //   Navbar,
    // },
    data() {
      return {
        
      }
    },
    
  }
  
</script>


<style>
#app {
  /* background-color: rgb(250, 216, 177); */
  background-image: url("https://firebasestorage.googleapis.com/v0/b/dbturck.appspot.com/o/backgroung.png?alt=media&token=6e5a9556-f3e0-4f66-9e6e-6ff91436c7b8");

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  max-width: 1920px;
  max-height: 1080px;
}
</style>

