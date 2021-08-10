<template>
  <div>
    <Navbar></Navbar>
    <v-row >
      <v-col></v-col>
    </v-row>
    <tr v-for="user in user" :key="user.id">
      <td>{{user.u_user}}</td>
      <td>{{user.u_satatus}}</td>
      <td>{{user.u_phone}}</td>
      <td>{{user.u_email}}</td>
      <td>{{user.u_password}}</td>
    </tr>
    {{user}}

  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import Navbar from "../components/navbar.vue"

export default {
  name: "Manageusers",
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
          this.user.push(doc.data());
        });
        console.log(user);
        
      });
    },
    
  },
  created() {
    this.getUser()
  },
  components: {
      Navbar,
    },
};
</script>

<style>
</style>