<template>
  <div>
    <input type="text" placeholder="email" v-model="email"/>
    <input type="password" placeholder="password" v-model="password"/>
  <button @click="login">Login</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name:"Home",
  data() {
    return {
      email:"",
      password:""
    }
  },

  methods:{
    login: function(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user =>{
          console.log(user.data)
          alert("Login succeed ")
        },
        err =>{
          alert(err);
        }
      );
    }
  }
};
</script>

<style>

</style>