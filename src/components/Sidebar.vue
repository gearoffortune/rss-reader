<template>
  <div class="sidebar">
    <button class="sidebar__item sidebar__item--controlbutton" @click="update">Refresh</button>
    <SidebarSource 
    :inFocus="inFocus===feedName"
    :feedName="feedName"
    v-for="feedName in this.getAllFeedNames" 
    :key="feedName">
    {{feedName}}
    </SidebarSource>
    <button class="sidebar__item sidebar__item--controlbutton" @click="showAdd">Add</button>
    <button class="sidebar__item sidebar__item--controlbutton" @click="toggleDelete">Del</button>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';
import SidebarSource from './SidebarSource';

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
    },
    toggleDelete() {
      this.$store.commit('toggleDeletion');
    }
  },
  components: {
    SidebarSource,
  }
}
</script>

<style>
  .sidebar__item--controlbutton {
    display: block;
  }
  .sidebar {
    height: 100%;
    width: 100%;
    flex-shrink: 2;
    overflow-y: auto;
    border-right: 1px solid black;
  }

</style>