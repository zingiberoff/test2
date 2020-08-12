<template>
  <div :style="{'min-height': height+'px'}" class="MenuPanel_container">
  <div :class="{ 'MenuPanel-fixed': fixed }" class="MenuPanel">
    <div class="container">
      <div class="flex flex_justify-between">
        <div class="logo">Logotype</div>
        <Menu class="menu" :menuData="menuData"/>

        <div class="user flex">
          <div>Регистрация</div>
          <div>Вход</div>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>
<script>
  import Menu from './Menu.vue'
export default {
  components:{
   Menu
  },
  props: ['menuData'],
  data() {
    return {
      fixed: false,
      height: 125
    }
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.height = this.$el.scrollHeight;
      window.addEventListener('scroll', () => {
        this.fixed = window.pageYOffset > this.$el.offsetTop;
      });
    })
  }
};
</script>
<style lang="scss">
  .MenuPanel {
    background: white;
    width: 100%;
    padding: 46px 0 30px;
  }

  .MenuPanel-fixed {
    position: fixed;
    top: 0;
    z-index: 200;
  }

  .logo {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>
