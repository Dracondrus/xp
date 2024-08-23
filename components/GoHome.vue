<template>
    <div class="GoHome">
        <button @click="clearError({ redirect: redirectToMain })">Back to Home</button>
    </div>
</template>
<script setup lang="ts">
import { redirectToMain } from '~/utils/constants/redirectToMain';


</script>
<style lang="scss" scoped>
.GoHome {
    margin-top: 30px;
}
</style>