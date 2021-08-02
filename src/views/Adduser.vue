<template>
  <div>
    <input type="text" placeholder="email" v-model="email"/>
    <input type="password" placeholder="password" v-model="password"/>
  <button @click="ADD">ADD</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name:"Adduser",
  data() {
    return {
      email:"",
      password:""
    }
  },

  methods:{
    ADD: function(){
      firebase.auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(
        user =>{
          console.log(user.data)
          alert("Add succeed ")
          
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