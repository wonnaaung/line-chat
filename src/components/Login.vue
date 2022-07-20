<template>
  <div class="line">LINE</div>
  <form @submit.prevent="Login">
    
    <input type="email" placeholder="Email" v-model="email" required>
    <input type="password" placeholder="Password" v-model="password" required>
    
      <button>Login</button>
    
    
  </form>
  
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    
    setup(){
        let displayname=ref("");
        let email=ref("");
        let password=ref("");

        let Login=()=>{
            
        }
        

        return {displayname,email,password,Login}
    }
}
</script>

<style>
  
</style>