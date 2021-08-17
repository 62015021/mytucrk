<template>
  <div>
    <!-- <v-app-bar id="navber">
      <v-row>
        <v-col align="center" >
          <v-btn class="ma-2" outlined color="indigo" to="/page">
            หน้าหลัก
          </v-btn>
        </v-col>
        <v-col align="center" >
          <v-btn class="ma-2" outlined color="indigo" to="/adduser">
            เพิ่มข้อมูลผู้ใช้
          </v-btn>
        </v-col>
        <v-col align="center" >
          <v-btn class="ma-2" outlined color="indigo" to="/manageusers">
            จัดการผู้ใช้
          </v-btn>
        </v-col>
        <v-col align="center" >
          <v-btn class="ma-2" outlined color="indigo" to="/turck">
            จัดการรถบรรทุก
          </v-btn>
        </v-col>
        <v-col align="center" >
          <v-btn class="ma-2" outlined color="indigo" @click="logout">
            ออกจากระบบ
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar> -->

    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Turck </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title >
              <v-btn class="ma-2" color="indigo" block to="/page">
                หน้าหลัก
              </v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title >
              <v-btn class="ma-2" color="indigo" block to="/manageusers">
                จัดการผู้ใช้
              </v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title >
              <v-btn class="ma-2" color="indigo" block @click="logout">
                ออกจากระบบ
              </v-btn>
            </v-list-item-title>
          </v-list-item>



        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        });
    },
  },
};
</script>

<style>
</style>