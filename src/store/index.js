import Vue from "vue";
import Vuex from "vuex";
import Parser from "rss-parser";

Vue.use(Vuex);
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
let parser = new Parser;

export default new Vuex.Store({
  state: {
    rssSources: [
      'https://mozilla-spidermonkey.github.io/feed.xml',
      'http://tonsky.me/blog/atom.xml',
      'https://swyx.io/rss.xml',
    ],
    entities: [],
    inFocus: undefined,
    showAddModal: false,
  },
  mutations: {
    updateEntities(store, payload){
      store.entities = payload;
    },
    setInFocus(store, payload) {
      store.inFocus = payload;
    },
    displayAddModal(store) {
      store.showAddModal = true;
    },
    removeAddModal(store) {
      store.showAddModal = false;
    },
    addSource(store, payload) {
      if(store.rssSources.indexOf(payload) === -1){
        store.rssSources.push(payload);
      }
    },
    addSources(store, payload) {
      store.rssSources = [...new Set(store.rssSources.concat(payload))];
    }
  },
  actions: {
    loadRss({commit, state}){
      Promise.all(state.rssSources.map((source) => {
      //  return parser.parseURL(CORS_PROXY + source)
      //})).then((values) => {
      //  commit('updateEntities', values.map(({status, value}) => value));
      return fetch(CORS_PROXY + source).then(res => res.text()).then(txt => parser.parseString(txt));
      })).then((values) => commit('updateEntities', values))
    },
  },
  modules: {},
  getters: {
    getAllFeedNames(state){
      return state.entities.map((feed) => feed.title)||[];
    },
    getCurrentFocusedArticles(state){
      return state.inFocus ? state.entities.find(x => x.title===state.inFocus).items : [];
    }
  }
});
