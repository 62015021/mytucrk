<template>
  <div>
    <Navbar></Navbar>
    <!-- เริ่มฟอมการเพิ่มข้อมูลผู้ใช้ -->
    <v-row>
      <v-col> </v-col>
      <v-col align="center">
        <br />
        <v-btn elevation="2" block color="#00E676"
          ><h2>เพิ่มข้อมูลพนักงาน</h2></v-btn
        >
        <br />
        <v-text-field type="text" label="E-mail" v-model="email"></v-text-field>
      </v-col>
      <v-col> </v-col>
    </v-row>

    <v-row>
      <v-col> </v-col>
      <v-col align="center">
        <v-text-field
          type="passwoed"
          label="Password"
          v-model="password"
        ></v-text-field>
      </v-col>
      <v-col> </v-col>
    </v-row>

    <v-row>
      <v-col> </v-col>
      <v-col align="center">
        <v-text-field type="text" label="Name" v-model="namecus"></v-text-field>
      </v-col>
      <v-col> </v-col>
    </v-row>

    <v-row>
      <v-col> </v-col>
      <v-col align="center">
        <v-text-field
          type="Phone"
          label="Phone"
          v-model="numphone"
        ></v-text-field>
      </v-col>
      <v-col> </v-col>
    </v-row>

    <v-row>
      <v-col> </v-col>
      <v-col align="center">
        <v-radio-group v-model="statuscus" type="text" row>
          <v-radio label="ผู้ดูเเล" value="1"></v-radio>
          <v-radio label="ช่าง" value="2"></v-radio>
        </v-radio-group>
        

        <v-row>
          <v-col>
            <v-btn elevation="2" color="#00E676" @click="ADD"
              >เพิ่มข้อมูล</v-btn
            >
            <v-divider vertical></v-divider>

            <v-btn elevation="2" color="#EF5350" @click="claerbolck"
              >ล้างข้อมูล</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col> </v-col>
    </v-row>
    
<!-- สิ้นสุดฟอมการเพิ่มข้อมูลผู้ใช้ -->
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import Navbar from "../components/navbar.vue";

export default {
  name: "turck",
  data() {
    return {
      email: "",
      password: "",
      namecus: "",
      numphone: "",
      statuscus: "",

    };
  },

  methods: {
    ADD: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          firebase
            .firestore()
            .collection("Turck")
            .doc(firebase.auth().currentUser.uid)
            .set({
              u_id: firebase.auth().currentUser.uid,
              u_email: this.email,
              u_password: this.password,
              u_user: this.namecus,
              u_phone: this.numphone,
              u_satatus: this.statuscus,
            })
            .then((docRef) => {
              console.log("Document written with ID: ", docRef.id);
              
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
            });
        }); //ของ then ใหญ่
    },

    claerbolck: function () {
      this.email = "";
      this.password = "";
      this.namecus = "";
      this.numphone = "";
      this.statuscus = "";
    },
  },
  components: {
    Navbar,
  },
};
</script>

<style>
</style>