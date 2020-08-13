<template>
  <div :class="{submenu:isSubMenu}" @mouseleave="unhover()" class="menu">
    <ul :style="listStyle">

        <li :key="index"
            @mouseenter="hover(index, $event)"
            v-for="(item, index) in menuData">
        <a :href="item.href">{{ item.title }}</a>
          <transition name="custom-classes-transition"
                      enter-active-class="animated fadeInUp animate__faster"
                      leave-active-class="animated bounceOutRight animate__faster">
            <Menu :menuData="submenu"
                  :offsetLeft="submenuOffsetLeft"
                  isSubMenu="true"
                  v-if="showSubmenu && activeItem!==false && activeItem === index"/>
            </transition>
      </li>
    </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MenuItem } from '../interfaces';

@Component
export default class Menu extends Vue {
  @Prop() readonly menuData!: MenuItem[];
  @Prop({ default: 0 }) readonly offsetLeft!: Number;
  @Prop({ default: false }) readonly isSubMenu!: boolean;
  showSubmenu: boolean = false;
  submenu: MenuItem[] = [];

  activeItem: number | boolean = false;
  timer: number = 0;
  submenuOffsetLeft: number = 0;


  get listStyle() {
    return { 'margin-left': this.offsetLeft + 'px' };
  }

  hover(index: number, event: Event): void {
    this.clearTimeout();
    console.log(index, this.activeItem);
    //if (index == this.activeItem) return;
    this.activeItem = index;
    let item = this.menuData[index];
    if (item.children?.length) {
      this.submenuOffsetLeft = event.target.offsetLeft
      this.submenu = item.children;
      this.showSubmenu = true;

    } else {
      this.removeSubmenu()
    }
  }

  removeSubmenu() {
    this.submenu = [];
    this.showSubmenu = false;
    this.submenuOffsetLeft = 0
    this.activeItem = false;
  }

  clearTimeout() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  unhover() {
    this.timer = setTimeout(() => {
      this.removeSubmenu()
    }, 1000);

  }

}
</script>
<style lang="scss" scoped>

  .menu {
    ul {
      display: flex;


      li {
        list-style: none;
        margin-right: 30px;

        a {
          text-decoration: none;
          color: black;
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

        &:hover {
          > a::after {
            transition: width 0.3s ease-in-out;
            width: 100%;
          }
        }
      }
    }

  }

  .submenu {
    position: absolute;
    width: 100%;
    left: 0;
    background: white;
    z-index: 202;

    ul {
      margin: 10px 100px;
    }
  }

</style>
