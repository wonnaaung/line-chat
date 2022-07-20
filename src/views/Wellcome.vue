<template>
  <div class="wellcome container">
    <div v-if="showLogin">
        <Login></Login>
    <p>Not have account?<span @click="showLogin=!showLogin">Create Account</span></p>
    </div>
    <div v-else>
        <SignUp></SignUp>
        <p>Aleady register?<span @click="showLogin=!showLogin">Login</span></p>
    </div>
    
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
export default {
  components: {
    Login, SignUp },
    setup(){
        let showLogin=ref(true);

        return{showLogin}
    }

}
</script>

<style>
    .wellcome{
        text-align: center;
        padding: 20px 0;        
        
    }
    .wellcome form{
        width:300px;
        margin: 1px auto;
    }
    .wellcome label{
        display: block;
        margin: 20px 0 10px;
    }
    .wellcome input{
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;
    }
    .wellcome span{
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
        color: #999;
    }
    .wellcome button{
        margin: 20px auto;
        width: 320px;
        height: 40px;
        
    }
    .line{
        color: rgb(11, 188, 64);
        font-size: 50px;
        font-family: Arial, Helvetica, sans-serif;
        display: block;
        
    }
</style>