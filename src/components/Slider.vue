<template>
  <div class="slider" >
    <transition name="fade" mode="in-out">
      <template v-for="(slide,index) in slides">
        <slide v-if="index==activeSlide" :key="index" :slide="slide"/>
      </template>
    </transition>
    <div class="slider_navbar">
      <div class="container flex flex_justify-between">
        <div class="prev" @click="prev()">prev</div>
        <div class="nav-indicator">
          <div
            :key="index"
            v-for="(slide,index) in this.slides"
            class="nav-indicator__item"
            :class="index===activeSlide?'nav-indicator__item_active':''"
            @click="setSlide(index)"
          ></div>
        </div>
        <div class="next" @click="next()">next</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Slide from './Slide.vue';

  export default {
    components: { Slide },
    name: 'Slider',
    data() {
      return {
        activeSlide: 0,
        slides: [
          {
            img: '/img/slide_1.jpg',
            title: 'Подготовка спрайтов для анимации в Unity',
            description: 'Спрайты должны немного отличаться друг от друга, чтобы было заметно движение.',
            topic: 'анимация',
            href: '/link_slide_1',
          },
          {
            img: '/img/slide_2.jpg',
            title: '2Подготовка спрайтов для анимации в Unity',
            description: '2Спрайты должны немного отличаться друг от друга, чтобы было заметно движение.',
            topic: '2анимация',
            href: '/link_slide_2',
          },
          {
            img: '/img/slide_3.jpg',
            title: '3Подготовка спрайтов для анимации в Unity',
            description: '3Спрайты должны немного отличаться друг от друга, чтобы было заметно движение.',
            topic: '3анимация',
            href: '/link_slide_3',
          },
        ],
      };
    },
    computed: {},
    methods: {
      prev() {
        if (this.activeSlide > 0) {
          this.activeSlide--;
        } else {
          this.activeSlide = this.slides.length - 1;
        }
      },
      next() {
        if (this.activeSlide < this.slides.length - 1) {
          this.activeSlide++;
        } else {
          this.activeSlide = 0;
        }
      },
      setSlide(index){
        this.activeSlide = index;
      }
    },
  };
</script>

<style scoped>
 .slider {
   height: 600px;
   width: 100%;
   overflow: hidden;
   position: relative;
 }

 .slider_navbar {
   position: absolute;
   bottom: 50px;
   width: 100%;
 }

 .nav-indicator {
   display: flex;
 }

 .nav-indicator__item {
   width: 70px;
   height: 6px;
   background: #F7F7F7;
   margin-right: 30px;
   opacity: 1;
 }

 .nav-indicator__item_active {
   background: #14A5DA;
 }

 .fade-enter-active, .fade-leave-active {
   transition: opacity .5s;
 }

 .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
 {
   opacity: 0;
 }
</style>
