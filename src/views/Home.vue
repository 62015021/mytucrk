<template>
  <div >
    <!-- <v-card width="" height="250px" color="#B2EBF2" >
         <v-row >
      <v-col align="center">
        <v-img src="../assets/logo.png" width="128" height="128"></v-img>
        <br>
        <h3>ระบบบำรุงรักษารถบรรทุก</h3>
        <h4>Truck Maintenance system</h4>
      </v-col>
      <v-col align="center" >
        <v-text-field type="text" label="E-mail" v-model="email"></v-text-field>
    <v-text-field
      type="password"
      label="Password"
      v-model="password"
    ></v-text-field>

    <v-btn class="ma-2" outlined color="indigo" @click="login"> Login </v-btn>
      </v-col>
    </v-row> 
    
    </v-card> -->
    <v-row>
      <v-col ><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></v-col>
    </v-row>
    <v-row>
      <v-col>

        <v-card width="" height="250px" color="#B2EBF2" >
         <v-row >
      <v-col align="center">
        <v-img src="../assets/logo.png" width="128" height="128"></v-img>
        <br>
        <h3>ระบบบำรุงรักษารถบรรทุก</h3>
        <h4>Truck Maintenance system</h4>
      </v-col>
      <v-col align="center" >
        <v-text-field type="text" label="E-mail" v-model="email"></v-text-field>
    <v-text-field
      type="password"
      label="Password"
      v-model="password"
    ></v-text-field>

    <v-btn class="ma-2" outlined color="indigo" @click="login"> Login </v-btn>
      </v-col>
    </v-row> 
    
    </v-card>


      </v-col>
    </v-row>
    <v-row>
      <v-col></v-col>
    </v-row>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Home",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log(user.data);
            alert("Login succeed ");
            this.$router.replace("/login");
          },
          (err) => {
            alert(err);
          }
        );
    },
  },
};
</script>

<style>
</style>