<template>
    <div class="v-catalog_page">
       <v-header></v-header>
       <v-catalog></v-catalog>
    </div>
</template>

<script>

import vHeader from '../v-header'
import vCatalog from '../v-catalog'
export default{
components:{
    vHeader,
    vCatalog
}
}

</script>

<style scoped>
a{
    color: black;
}
</style>