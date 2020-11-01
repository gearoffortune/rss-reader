<template>
  <a :href="link" target="__blank" class="central__article">
    <p class="central__article__header">{{title}}</p>
    <p class="central__article__snippet">{{contentSnippet}}</p>
  </a>
</template>

<script>
export default {
 props: {
   title: {
     type: String,
     required: true,
   },
   contentSnippet: {
     type: String,
     required: true,
   },
   link: {
     type: String, 
     required: true,
   }
 }
}
</script>

<style>
.central__article {
  display: block;
  text-decoration: none;
  color: black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  transition: opacity 0.2s;
}
.central__article:hover {
  opacity: 0.7;
}
.central__article:visited {
  color: grey;
}
.central__article__header {
  font-size: 1.5rem;
  font-weight: 600;
}
.central__article__snippet {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>