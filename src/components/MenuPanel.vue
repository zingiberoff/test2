<template>
  <div class="MenuPanel">
    <div class="container">
      <div class="flex flex_justify-between">
        <div class="logo">Logotype</div>
        <menu class="menu"></menu>
        <div class="menu">
          <ul class="flex">
            <li>Меню</li>
            <li>Меню</li>
            <li>Меню</li>
            <li>Меню</li>
            <li>Меню</li>
            <li>Меню</li>
          </ul>
        </div>
        <div class="user flex">
          <div>Регистрация</div>
          <div>Вход</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
};
</script>
<style lang="scss">
  .MenuPanel{
    padding: 46px 0 30px;
  }
  .logo{
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>
