<template>
  <div class="Sidebar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
  };
</script>

<style scoped>
  .Sidebar {
    position: fixed;
    top: 52px;
    left: 0;
    z-index: 210;
    background: white;
    width: 100vw;
    height: 100vh;
    text-align: center;
  }
</style>
