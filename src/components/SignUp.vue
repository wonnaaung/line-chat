<template>
<div class="line">LINE</div>
  <form @submit.prevent="signUp">
    <input type="name" placeholder="Display Name" v-model="displayname" required>
    <input type="email" placeholder="Email" v-model="email" required>
    <input type="password" placeholder="Password" v-model="password" required>
    
      <button>SignUp</button>
    
  </form>
  
</template>

<script>
import { ref } from '@vue/reactivity';
import { auth } from '../firebase/config';

export default {
    
    setup(){
        let displayname=ref("");
        let email=ref("");
        let password=ref("");
        let error=ref("null")

        let signUp=async()=>{
          try{
            let res= await auth.createUserWithEmailAndPassword(email.value,password.value)
            if(!res){
              throw new Error("not found URL")
            }
            res.user.updateProfile({displayName:displayname.value})
            console.log(res.user)

          }catch(err){
              error.value=err.message;
              
          }
        }


        return {displayname,email,password,signUp}
    }
}
</script>

<style>

</style>