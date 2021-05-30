<template>
  <div class="v-productEdit">
    <v-header></v-header>
    <div class="header-tab">
      <button class="tabClick" @click="is_Add()">Добавить</button>
      <button class="tabClick" @click="is_Delete()">Удалить</button>
      <button class="tabClick" @click="is_Edit()">Редактировать</button>
    </div>
  <addNewProductComp v-if="isAdd"></addNewProductComp>
  <deleteProductComp v-if="isDelete"></deleteProductComp>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "../v-header";
import vFooter from "../v-footer";
import addNewProductComp from "../v-addProduct"
import deleteProductComp from "../v-delete-product"
export default {
  data() {
    return {
     isAdd:false,
     isDelete:false,
     isEdit:false
    };
  },
  components: {
    vHeader,
    vFooter,
    addNewProductComp,
    deleteProductComp
  },
  methods: {
    is_Edit(){
      this.isEdit=true
      this.isAdd=false
      this.isDelete=false
    },
    is_Add(){
      this.isEdit=false
      this.isDelete=false
      this.isAdd=true
    },
    is_Delete(){
      this.isEdit=false
      this.isDelete=true
      this.isAdd=false
    }
  },
};
</script>

<style>












</style>
