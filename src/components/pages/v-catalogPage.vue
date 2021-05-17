<template>
    <div class="v-catalog_page">
       <v-header></v-header>
       <v-catalog></v-catalog>
       <v-footer></v-footer>
    </div>
</template>

<script>

import vHeader from '../v-header'
import vCatalog from '../v-catalog'
import vFooter from '../v-footer'

export default{
components:{
    vHeader,
    vCatalog,
    vFooter

}
}

</script>

<style scoped>
a{
    color: black;
}
</style>