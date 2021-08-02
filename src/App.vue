<template  >
  <div id="app">
    <v-fab-transition>
      <v-parallax
        height="1080"
        src="https://firebasestorage.googleapis.com/v0/b/dbturck.appspot.com/o/backgroung1.png?alt=media&token=dc06113e-5d57-4977-a22a-76f633d426a1"
      >
        <v-card width="" height="900px" color="#E3F2FD">
          
          <router-view></router-view>
        </v-card>
        
      </v-parallax>
    </v-fab-transition>
    
  </div>
  
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
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

