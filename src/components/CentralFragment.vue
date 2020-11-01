<template>
  <div class="central">
    <article-card 
    v-for="article in articles"
    :link="article.link"  
    :key="article.title"
    :title="article.title"
    :contentSnippet="article.contentSnippet"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ArticleCard from './ArticleCard.vue'
export default {
  computed: mapGetters({articles: "getCurrentFocusedArticles"}),
  components: {ArticleCard},
}
</script>

<style>
  .central {
    height: 100%;
    width: 100%;
    flex-shrink: 1;
    overflow-y: auto;
  }
</style>