<template>
  <div>
    <v-app-bar id="navber">
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
          <v-btn class="ma-2" outlined color="indigo" @click="logout">
            ออกจากระบบ
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
export default {
  name: "Navbar",
  data() {
    return {};
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