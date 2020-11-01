<template>
  <div class="sidebar">
    <button class="sidebar__item sidebar__item--controlbutton" @click="update">Refresh</button>
    <button class="sidebar__item" :class="[inFocus===feedName ? 'sidebar__item--active': '']" v-for="feedName in this.getAllFeedNames" :key="feedName" @click="clickHandler(feedName)">{{feedName}}</button>
    <button class="sidebar__item sidebar__item--controlbutton" @click="showAdd">Add</button>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
export default {
  computed: {...mapGetters(['getAllFeedNames']), ...mapState(['inFocus']),},
  methods: {
    clickHandler(feedName) {
      this.$store.commit('setInFocus', feedName);
    },
    update() {
      this.$store.dispatch('loadRss');
    },
    showAdd() {
      this.$store.commit('displayAddModal');
    }
  }
}
</script>

<style>
  .sidebar {
    height: 100%;
    width: 100%;
    flex-shrink: 2;
    overflow-y: auto;
    border-right: 1px solid black;
  }
  .sidebar__item {
    display: block;
    width: 100%;
    border: none;
    border-bottom: grey 1px solid;
    height: 3rem;
    font-size: 1.6rem;
    padding: 0;
  }
  .sidebar__item--active {
    font-weight: bolder;
  }
</style>