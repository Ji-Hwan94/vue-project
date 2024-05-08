<template>
  <div v-for="(blog, i) in blogs" :key="i">
    <h5 @click="$router.push(`/detail/${i}`)">{{ blogs[i].title }}</h5>
    <p>{{ blogs[i].content }}</p>
    <p>{{ blogs[i].date }}</p>
  </div>
</template>

<script>
export default {
  name: "ListComponent",
  props: {
    blogs: Array,
  },
};
</script>

<style></style>
