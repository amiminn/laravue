<template>
    <div>
        <ul>
            <li><router-link to="/">home</router-link></li>
            <li><router-link to="/dashboard">dashboard</router-link></li>
            <li><router-link to="/about">about</router-link></li>
            <li><button @click="logout">logout</button></li>
        </ul>
        <hr />
        <router-view />
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            localStorage.removeItem("loggedIn");
            this.$router.push("/");
        },
    },
};
</script>
<style lang=""></style>
