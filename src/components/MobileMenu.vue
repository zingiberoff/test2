<template>
  <div :class="{submenu:isSubMenu}" class="menu">
    <ul>

        <li :key="index"
            @click="toggle(index, $event)"
            v-for="(item, index) in menuData"
            onblur="activeItem=false"
            :class="{active:activeItem === index}">
        <a :href="item.href">{{ item.title }}</a>

            <MobileMenu :menuData="item.children"
                        isSubMenu="true"
            />

      </li>
    </ul>
    </div>
</template>

<script lang="ts">
/**
 *  Т.к на мобильном навигаци по наведению невозможна,
 *  делаем компонент меню который работает по клику.
 */

import { Component, Prop, Vue } from 'vue-property-decorator';
import { MenuItem } from '../interfaces';

@Component
export default class MobileMenu extends Vue {
  @Prop() readonly menuData!: MenuItem[];

  @Prop({ default: false }) readonly isSubMenu!: boolean;

  activeItem: number | boolean = false;

  toggle(index: number, event: Event): void {
    this.activeItem = index;
    // убираем подчеркивание если нет подпунктов
    if (!this.menuData[index].children) {
      setTimeout(() => {
        this.activeItem = false;
      }, 300);
    }
  }

}
</script>
<style lang="scss" scoped>

  .menu {
    font-size: 16px;
    text-align: center;

    ul {
      display: flex;
      align-items: stretch;
      flex-direction: column;

      li {
        list-style: none;
      }
    }
  }

  a {
    text-decoration: none;
    display: inline-block;
    color: black;
    padding: 10px;
    margin-top: 5px;
    position: relative;

    &::after {
      content: '';
      height: 1px;
      width: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      background: black;
      transition: width 1s ease-in-out;
    }
  }

  .submenu {
    width: 100%;
    z-index: 202;

    > ul {
      > li > a {
        transition: all .5s ease-in-out;
        max-height: 0;
        opacity: 0;
        color: gray

      }
    }

  }

  li:not(.active) {
    > .submenu > ul > li > a {
      display: block;
      padding: 0;
      margin-top: 0;
    }
  }

  .active {
    > a::after {
      transition: width 0.3s ease-in-out;
      width: 100%;
    }

    > .submenu > ul > li > a {
      max-height: 20px;
      opacity: 1;

    }
  }
</style>
