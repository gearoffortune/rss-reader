<template>
  <div class="sidebar__item" 
      :class="[inFocus ? 'sidebar__item--active': '']">
    <button class="sidebar__item__sourcebutton"
      @click="clickHandler">
      {{feedName}}
      </button>
      <button class="sidebar__item__del" v-show="delActive" @click="deleteHandler">Del</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  props: {
    inFocus: Boolean,
    feedName: String,
  },
  methods: {
    clickHandler() {
      this.$store.commit('setInFocus', this.feedName);
    },
    deleteHandler() {
      this.$store.commit('deleteEntity', this.feedName);
    }
  },
  computed: {
    ...mapState({delActive: 'isDeleteButtonsActive'}),
  }
}
</script>

<style>
  .sidebar__item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: none;
    border-bottom: grey 1px solid;
    height: 3rem;
    font-size: 1.6rem;
    padding: 0;
  }
  .sidebar__item--active > .sidebar__item__sourcebutton {
    font-weight: bolder;
  }
.sidebar__item__sourcebutton {
  height: 100%;
  background: white;
  border: none;
  flex-grow: 1;
}
</style>