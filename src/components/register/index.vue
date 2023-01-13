<template>
    <div v-if="loggedin == 0" class="grid mx-auto content-center h-screen w-full sm:w-[600px]">
        <div class="bg-[#00000033] rounded-lg p-4 mx-7">
            <h2 class="text-center p-2 text-white text-[24px] mb-3">Create a CabinPoker Account</h2>
            <form @submit.prevent>
                <input type="email" class="bg-[#e5e0e0] p-5 text-[22px] rounded w-full mb-3" placeholder="Email Address" v-model="email" /><br />
                <input type="text" class="bg-[#e5e0e0] p-5 text-[22px] rounded w-full mb-3" placeholder="Username" v-model="username" /><br />
                <input type="password" class="bg-[#e5e0e0] p-5 text-[22px] rounded w-full" placeholder="Password" v-model="password" /><br />
            <div class="grid mx-auto">
                <button @click="registerAccount" class="bg-[#48bb7e] hover:bg-[#54d490] text-[#FFF] text-[20px] p-3 rounded mt-3">Create Account</button>
            </div>

            <div @click="$router.push('/login')" class="text-[#60b9a9] mt-4 ml-2 text-[24px] float-left cursor-pointer">Login Instead</div>
        </form>
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import axios from 'axios';
const loggedin = inject("loggedin")

const username = ref("")
const password = ref("")
const email = ref("")

function registerAccount() {
    let newUser = {
        username: username,
        password: password,
        email: email
    }

    axios.post("http://localhost:3001/register", newUser)
    console.log(newUser)
}
</script>

<style scoped>

</style>