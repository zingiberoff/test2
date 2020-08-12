<template>
  <div class="MenuPanel">
    <div class="container">
      <div class="flex flex_justify-between">
        <div>Режим работы</div>
        <div>Правила посещения</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HeaderInfo extends Vue {
}
</script>

<style scoped>
  .MenuPanel {
    padding: 11px 0;
    background: #DCE5E9;
  }
</style>
