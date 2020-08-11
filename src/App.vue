<template>
  <div id="app">
    <header>
      <HeaderInfo ></HeaderInfo>
      <MenuPanel :menuData="menu"></MenuPanel>
      <div class="slider">
        <img src="./assets/images/slide_1.jpg" alt="">
      </div>
    </header>
    <main>main</main>
    <footer>footer</footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuPanel from './components/MenuPanel.vue';
import HeaderInfo from './components/HeaderInfo.vue';
import { menu as menuData } from './data';

@Component({
  components: {
    HeaderInfo,
    MenuPanel,
  },
})
export default class App extends Vue {
  menu = menuData;
}
</script>

<style lang="scss" src="./assets/styles.scss"></style>
<style lang="scss">
  #app {
    display: flex;
    flex-direction:column;
    min-height: 100vh;
  }
  header {
    width: 100%;
    .menu{

    }
    .slider{
      width: 100%;
      overflow: hidden;
      text-align: center;
    }
  }
  main {
    background: #b7b918;
    flex-grow: 1;
  }
  footer {
    background: #b9afb7;
  }
</style>
