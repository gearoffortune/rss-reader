<template>
  <div id="app">
    <central-fragment />
    <sidebar/>
    <add-modal v-if="showAddModal"/>
  </div>
</template>

<script>
import CentralFragment from "./components/CentralFragment.vue";
import Sidebar from "./components/Sidebar.vue";
import AddModal from './components/AddModal.vue';
import {mapState} from 'vuex';

export default {
  name: "App",
  components: {
    CentralFragment,
    Sidebar,
    AddModal,
  },
  computed: {
    ...mapState(['showAddModal'])
  },
  beforeMount() {
    if(localStorage.getItem('rss-sources')){
      this.$store.commit('addSources',JSON.parse(localStorage.getItem('rss-sources')))
    }
    this.$store.dispatch('loadRss');
    this.$store.subscribe((mutation, state) => {
      if(mutation.type==='addSource'||mutation.type==='addSources'||mutation.type==='deleteEntity'){
        localStorage.setItem('rss-sources' ,JSON.stringify(state.rssSources));
      }
    })
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
}
</style>
