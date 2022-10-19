<template lang="">
    <div>
        <h1>Login Page</h1>
        <button @click="login">login</button>
    </div>
</template>
<script>
export default {
    methods: {
        login() {
            let set = localStorage.setItem("loggedIn", true);
            this.$router.push("/dashboard");
        },
    },
};
</script>
<style lang=""></style>
