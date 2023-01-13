<template>
    <div v-if="loggedin == 0" class="grid mx-auto content-center h-screen w-full sm:w-[600px]">
        <div class="bg-[#00000033] rounded-lg p-4 mx-7">
            <h2 class="text-center p-2 text-white text-[24px] mb-3">Login to CabinPoker</h2>
            <form @submit.prevent>
            <input type="text" class="bg-[#e5e0e0] p-5 text-[22px] rounded w-full mb-3" placeholder="Username" v-ref="username" /><br />
            <input type="password" class="bg-[#e5e0e0] p-5 text-[22px] rounded w-full" placeholder="Password" v-ref="password" /><br />
            <div class="grid mx-auto">
                <button @click="signIn" class="bg-[#48bb7e] hover:bg-[#54d490] text-[#FFF] text-[20px] p-3 rounded mt-3">Login</button>
            </div>

            <div @click="$router.push('/register')" class="text-[#60b9a9] mt-4 ml-2 text-[24px] float-left cursor-pointer">Create Account</div>
            <div @click="$router.push('/forgot')" class="text-white mt-6 mr-2 float-right cursor-pointer">Forgotten Password?</div>
        </form>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue'
const loggedin = inject("loggedin")

function signIn() {
    
}
</script>

<style scoped>

</style>