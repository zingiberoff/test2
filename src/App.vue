<template>
  <div id="app">
    <header>
      <MenuPanel :menuData="menu"></MenuPanel>
      <Slider></Slider>

    </header>
    <main>
      <div class="container">
        <About></About>
        <News></News>
      </div>
    </main>
    <footer>footer</footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuPanel from './components/MenuPanel.vue';
import Slider from './components/Slider.vue';
import About from './components/About.vue';
import News from './components/News.vue';
import HeaderInfo from './components/HeaderInfo.vue';
import { menu as menuData } from './data';

@Component({
  components: {
    HeaderInfo,
    MenuPanel,
    Slider,
    About,
    News,
  },
})
export default class App extends Vue {
  menu = menuData;
  showSidebar = false;
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
    flex-grow: 1;
  }

  footer {
    background: #b9afb7;
  }
</style>
