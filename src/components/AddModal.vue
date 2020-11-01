<template>
  <div class="newsource">
    <p class="newsource__text">new source</p>
    <input type="text" v-model="source" class="newsource__input">
    <button class="newsource__button newsource__button--cancel" @click="removeModal">Cancel</button>
    <button class="newsrouce__button newsrouce__button--ok" @click="formHandler">Add</button>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex';
export default {
  data() {
    return {
      source: '',
    }
  },
  methods: {
    ...mapMutations({'removeModal': 'removeAddModal', addSource: 'addSource'}),
    ...mapActions(['loadRss']),
    formHandler() {
      if(this.source.length > 0){
        this.addSource(this.source);
      }
      this.removeModal();
      this.loadRss();
    }
  }
}
</script>

<style>
.newsource {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #eee;
}

</style>