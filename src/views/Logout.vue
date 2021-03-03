<template>
    <h3 class="text-white">Logout Successful. Redirecting to home page in three seconds...</h3>
</template>

<script>

export default {
    
    created (){
        setTimeout( () => this.$router.push('/Home'), 3000 )
    }
}
</script>