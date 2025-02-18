<script>
export default {
  props: {
    message: String,
  },
};
</script>

<template>
  <h1>{{ message }}</h1>
</template>

<style>
h1 {
  margin: 20px;
}
</style>
