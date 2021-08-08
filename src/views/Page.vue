<template>
  <div>
    <Navbar></Navbar>
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
import Navbar from "../components/navbar.vue"

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
  },
  components: {
      Navbar,
    },
};
</script>

<style>
</style>