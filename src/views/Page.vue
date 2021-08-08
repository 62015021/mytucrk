<template>
  <div>
    <v-app-bar>
      <v-btn class="ma-2" outlined color="indigo" @click="logout">
        ออกจากระบบ
      </v-btn>
      <v-btn class="ma-2" outlined color="indigo" to="/adduser">
        เพิ่มข้อมูลผู้ใช้
      </v-btn>
    </v-app-bar>
    <v-row >
      <v-col></v-col>
    </v-row>
    <tr>
      <td>{{user}}</td>
    </tr>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export default {
  name: "page",
  data() {
    return {
      user: [],
      name: [],
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
    getUser() {
      var db = firebase.firestore();
      db.collection("user").onSnapshot((querySnapshot) => {
        var user = [];
        querySnapshot.forEach((doc) => {
          this.user.push(doc.data().name);
        });
        console.log(user);
      });
    },
    
  },
  created() {
    this.getUser()
  }
};
</script>

<style>
</style>