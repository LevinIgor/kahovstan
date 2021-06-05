<template>
  <div class="v-productEdit" v-if="$store.getters.GET_ADMIN">
    <v-header></v-header>
    <div class="tabs">
      <div class="header-tab-product">
        <button class="tabClick" @click="is_Add()">Добавить товар</button>
        <button class="tabClick" @click="is_Delete()">Удалить товар</button>
        <button class="tabClick" @click="is_Edit()">Редактировать товар</button>
      </div>
      <div class="header-tab-faq">
        <button class="tabClick" @click="is_AddFaq()">Добавить вопрос</button>
        <button class="tabClick" @click="is_DeleteFaq()">Удалить вопрос</button>
        <button class="tabClick" @click="is_EditFaq()">
          Редактировать вопрос
        </button>
      </div>
    </div>

    <addNewProductComp v-if="isAdd"></addNewProductComp>
    <deleteProductComp v-if="isDelete"></deleteProductComp>
    <editProductComp v-if="isEdit"></editProductComp>
    <addFaq v-if="isAddFaq"></addFaq>
    <deleteFaq  v-if="isDeleteFaq"></deleteFaq>
    <editFaq  v-if="isEditFaq"></editfaq>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "../v-header";
import vFooter from "../v-footer";
import addNewProductComp from "../v-addProduct";
import deleteProductComp from "../v-delete-product";
import editProductComp from "../v-editProduct";
import addFaq from "../v-addFaq";
import editFaq from "../v-editFaq"
import deleteFaq from "../v-deleteFaq"
export default {
  data() {
    return {
      isAdd: false,
      isDelete: false,
      isEdit: false,
      isAddFaq: false,
      isDeleteFaq: false,
      isEditFaq: false,
    };
  },
  components: {
    vHeader,
    vFooter,
    addNewProductComp,
    deleteProductComp,
    editProductComp,
    addFaq,
    editFaq,
    deleteFaq
  },
  methods: {
    is_Edit() {
      this.isEdit = true;
      this.isAdd = false;
      this.isDelete = false;
      this.isAddFaq = false;
      this.isDeleteFaq = false;
      this.isEditFaq = false;
    },
    is_Add() {
      this.isEdit = false;
      this.isAdd = true;
      this.isDelete = false;
      this.isAddFaq = false;
      this.isDeleteFaq = false;
      this.isEditFaq = false;
    },
    is_Delete() {
      this.isEdit = false;
      this.isAdd = false;
      this.isDelete = true;
      this.isAddFaq = false;
      this.isDeleteFaq = false;
      this.isEditFaq = false;
    },
    is_AddFaq() {
      this.isEdit = false;
      this.isAdd = false;
      this.isDelete = false;
      this.isAddFaq = true;
      this.isDeleteFaq = false;
      this.isEditFaq = false;
    },
    is_DeleteFaq() {
      this.isEdit = false;
      this.isAdd = false;
      this.isDelete = false;
      this.isAddFaq = false;
      this.isDeleteFaq = true;
      this.isEditFaq = false;
    },
    is_EditFaq() {
      this.isEdit = false;
      this.isAdd = false;
      this.isDelete = false;
      this.isAddFaq = false;
      this.isDeleteFaq = false;
      this.isEditFaq = true;
    },
  },
};
</script>

<style>
.v-productEdit {
  position: relative;
}

.tabs {
  margin: 30px;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
}

.tabClick {
  background: black;
  color: white;
  padding: 5px;
  font-size: 20px;
}
</style>
