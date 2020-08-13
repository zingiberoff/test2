<template>
  <div :style="{'min-height': height+'px'}">
    <div id="header_info"
         class="header_info">
      <div class="container">
          <Info class="flex flex_justify-between"/>
      </div>
    </div>
    <div :class="{ 'MenuPanel_fixed': fixed ,'MenuPanel-side':showSidebar}" class="MenuPanel" id="MenuPanel">
      <div class="container MenuPanel__content">
      <div class="MenuPanel__logo-container">
          <div class="MenuPanel__logo">Logotype</div>
          <div class="MenuPanel__burger" @click="showSidebar=!showSidebar">
            <img v-if="!showSidebar" src="../assets/images/burger.svg" alt="">
            <img v-else src="../assets/images/close.svg" alt="">
          </div>
        </div>
        <Menu class="MenuPanel__menu" :menuData="menuData"/>
        <div class="MenuPanel__user">
          <div>Регистрация</div>
          <div>Вход</div>
        </div>

      </div>
    </div>
    <transition enter-active-class="animated slideInLeft animate__faster"
                leave-active-class="animated slideOutLeft animate__faster">
    <Sidebar v-if="showSidebar">
    <div class="container">
        <MobileMenu :menuData="menuData"/>
      <div class="sidebar__user">
          <div>Регистрация</div>
          <div>Вход</div>
        </div>
      </div>
       <Info></Info>
    </Sidebar>

      </transition>
  </div>
</template>
<script>
import Menu from './Menu.vue';
import MobileMenu from './MobileMenu.vue';
import Sidebar from './Sidebar.vue';
import HeaderInfo from './HeaderInfo.vue';
import Info from './static/Info.vue';

export default {
  components: {
    Menu,
    Sidebar,
    HeaderInfo,
    MobileMenu,
    Info
  },
  props: ['menuData'],
  data() {
    return {
      fixed: false,
      height: 0,
      showSidebar: false,
    };
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      const menuPanelElement = this.$el.children.MenuPanel;
      const menuPanelElementOffset = menuPanelElement.offsetTop;
      console.log(menuPanelElementOffset);
      this.height = this.$el.scrollHeight;
      window.addEventListener('scroll', () => {
        this.fixed = window.pageYOffset > menuPanelElementOffset;
      });
    });
  }
};
</script>
<style lang="scss" scoped>
  .MenuPanel {
    background: white;
    width: 100%;
    padding: 46px 0 30px;
    display: flex;
    justify-content: space-between;

    &__content {
      display: flex;
      justify-content: space-between;
    }

    &__user {
      display: flex;
    }

    &__burger {
      display: none;
    }

    &_fixed {
      position: fixed;
      top: 0;
      z-index: 200;
    }
  }

  @media screen and (max-width: 640px) {
    .MenuPanel {

      padding: 15px 0 15px;

      &__menu, &__user {
        display: none;
      }

      &__burger {
        display: inline-block;
      }

      &__logo-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }

      &-side {

      }
    }
  }

  @media screen and (min-width: 640px) {

  }



  .header_info {
    padding: 11px 0;
    background: #DCE5E9;
  }
</style>
