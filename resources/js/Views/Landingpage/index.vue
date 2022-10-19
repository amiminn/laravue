<template>
    <div>
        <ul>
            <li><router-link to="/dashboard">dashboard</router-link></li>
            <li v-if="!login">
                <router-link to="/login">login</router-link>
            </li>
            <li v-if="!login">
                <router-link to="/register">register</router-link>
            </li>
        </ul>
        <hr />
        <h1>landing page</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: false,
        };
    },
    mounted() {
        this.login = localStorage.getItem("loggedIn");
    },
};
</script>
<style lang=""></style>
