<template  >
  <div id="app">
    <v-fab-transition>
      <v-parallax
        height="1080"
        src="https://firebasestorage.googleapis.com/v0/b/dbturck.appspot.com/o/backgroung1.png?alt=media&token=dc06113e-5d57-4977-a22a-76f633d426a1"
      >
        <v-card width="" height="360px" color="#E3F2FD">
          <v-row>
            <v-col align="center">
              <br /><br /><br />
              <v-img src="./assets/logo.png" height="128" width="128"> </v-img>
              <br />
              <h2>ระบบซ่อมบำรุงรถบรรทุก</h2>
              <h2>Truck maintenance</h2>
            </v-col>
            <v-col align="center">
              <v-col>
                <br />
                <h3>No.ID / รหัสประจำตัว</h3>
                <v-text-field
              v-model="title"
              :disabled="isUpdating"
              filled
              color="blue-grey lighten-2"
              label="No.ID / รหัสประจำตัว"
            ></v-text-field>
                <br />
                <h3>Password / รหัสผ่าน</h3>
                <v-text-field
              v-model="title"
              :disabled="isUpdating"
              filled
              color="blue-grey lighten-2"
              label="Password / รหัสผ่าน"
            ></v-text-field>
                <br />
                <v-btn
                  class="ma-2"
                  :loading="loading2"
                  :disabled="loading2"
                  color="#43A047"
                  @click="loader = 'loading2'"
                >
                  เข้าสู่ระบบ
                  <template v-slot:loader>
                    <span>กำลังเข้าสู่ระบบ</span>
                  </template>
                </v-btn>
              </v-col>
            </v-col>
          </v-row>
        </v-card>
        <router-view></router-view>
      </v-parallax>
    </v-fab-transition>
    
  </div>
  
</template>

<script>
  export default {
    data () {
      return {
        loader: null,
        loading: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
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

