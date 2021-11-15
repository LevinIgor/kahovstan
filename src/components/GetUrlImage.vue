<template>
    <div class="getUrl">
 
 
 <div class="downloadImage">
     <input type="file" src="" alt="" @change="setImageName($event)">
     <button @click="addImage">Add image</button>
 </div>
 
   <div class="getUrl">
        <input type="text" name="" id="" v-model="url">
        <button @click="getUrl">Get url image</button>
   </div>



       
    </div>
</template>

<script>
import firebase from "../../firebase"

export default{
    data(){
        return{
            url:"",
            imageName:""
        }
    },
    methods:{
        getUrl(){
            var storage = firebase.storage()
           storage.ref("DIP_300.stanok_kpo.jpg").getDownloadURL().then((ref)=>this.url=ref)
        },
        setImageName(e){
            this.imageName = e.target.files[0]
        },
        addImage(){
            firebase.storage().ref(this.imageName.name).put(this.imageName)
           
        }
    }
}


</script>


<style scoped>


</style>