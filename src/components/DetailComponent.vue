<template>
  <div>
    <h4>상세페이지</h4>
    <h5 @click="$router.push({ name: 'author' })">
      {{ blogs[$route.params.id].title }}
    </h5>
    <p @click="$router.push({ name: 'comment' })">
      {{ blogs[$route.params.id].content }}
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "DetailComponent",
  props: {
    blogs: Array,
  },
};
</script>

<style></style>
