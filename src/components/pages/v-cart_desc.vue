<template>
<div class="vCartDesc">
    <v-header></v-header>
    <div class="content"> 
        <div class="category">{{$route.params.id}}</div>
         </div>
    <v-footer></v-footer>
</div>

</template>
<script>

import vHeader from '../v-header'
import vFooter from '../v-footer'

export default {
    components:{
        vHeader,
        vFooter
    }
}

</script>

<style >
.content{
    height: 300px;
    width: 100%;
}
</style>
