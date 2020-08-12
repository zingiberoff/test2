<template>
  <div id="app">
    <header>
      <HeaderInfo></HeaderInfo>
      <MenuPanel :menuData="menu"></MenuPanel>
      <Slider></Slider>

    </header>
    <main>main</main>
    <footer>footer</footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuPanel from './components/MenuPanel.vue';
import Slider from './components/Slider.vue';
import HeaderInfo from './components/HeaderInfo.vue';
import { menu as menuData } from './data';

@Component({
  components: {
    HeaderInfo,
    MenuPanel,
    Slider,
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
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    width: 100%;

    .menu {

    }

    .slider {

    }
  }

  main {
    background: #b7b918;
    flex-grow: 1;
    height: 2000px;
  }

  footer {
    background: #b9afb7;
  }
</style>
