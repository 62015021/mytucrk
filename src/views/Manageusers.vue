<template>
  <div >
    <Navbar></Navbar>
    <br>
          
            <center>
            <tr v-for="user in user" :key="user.id">
              <v-card elevation="2" width="550"  align="center">
                <v-responsive  height="" >
          
          

          <v-row>
            <v-col align="center" >
                <p>ชื่อ</p><td>{{ user.u_user }}</td>
            </v-col>
            <v-col align="center">
                <p>E-mail</p><td>{{ user.u_email }}</td>
            </v-col>
            <v-col align="center">
                <p>ตำเเหน่ง</p><td>{{ user.u_satatus }}</td>
            </v-col>
            <br>
            <v-col align="center">
                <p>เบอร์โทรติดต่อ</p><td>{{ user.u_phone }}</td>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <p>รหัสผ่าน</p> <td v-show="passShow">{{ user.u_password }}</td>
            </v-col>
          </v-row>
          
          <v-btn @click="viwe">ดูรหัสผ่าน</v-btn>
          </v-responsive>
          </v-card>
          <br><br>
          </tr>
          </center>
          

          
          
        
      
    <v-btn elevation="2" fixed fab right bottom to="/adduser">+</v-btn>
    <!-- {{ user }} -->
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import Navbar from "../components/navbar.vue";

export default {
  name: "Manageusers",
  data() {
    return {
      user: [],
      name: [],
      passShow : false,
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
    viwe (){
      if (this.passShow == false) {
        this.passShow = true
      }else{
        this.passShow = false

      }
      
      

    },
  },
  created() {
    this.getUser();
  },
  components: {
    Navbar,
  },
};
</script>

<style>
body{
  align-items: center;
}
</style>