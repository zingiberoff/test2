<template>
  <div class="slider"
       @mouseenter="disableAutoScrol()"
       @mouseleave="enableAutoScrol()"
  >
    <transition mode="in-out" name="fade">
      <template v-for="(slide,index) in slides">
        <slide :key="index" :slide="slide" v-if="index==activeSlide"/>
      </template>
    </transition>
    <div class="slider_navbar">
      <div class="container flex flex_justify-between">
        <img @click="prev()" alt="Предыдущий слайд" class="arrow arrow_prev"
             src="../assets/images/left-arrow.svg"/>
        <div class="nav-indicator">
          <div
            :class="index===activeSlide?'nav-indicator__item_active':''"
            :key="index"
            @click="setSlide(index)"
            class="nav-indicator__item"
            v-for="(slide,index) in this.slides"
          >
            <div class="nav-indicator__line"></div>
          </div>
        </div>
        <img @click="next()" alt="Следующий слайд" class="arrow arrow_next"
             src="../assets/images/left-arrow.svg"/>
      </div>
    </div>
  </div>
</template>

<script>
import Slide from './Slide.vue';


/**
 * Компонент слайдера
 * автоскрол приостанавливается если курсор наведен на слайдер
 */
export default {
  components: { Slide },
  name: 'Slider',
  props: {
    duration: {
      type: Number,
      default: 5000,
    },
  },
  data() {
    return {
      activeSlide: 0,
      isAutoScroll: true,
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
          title: 'Трехмерное моделирование в современном мире',
          description: 'Пионером в этой отрасли является компания Autodesk (известная многим по своему продукту AutoCAD, но о нем позже).\n' +
            'Продукты Autodesk 3Ds Max, и Autodesk Maya, де-факто стали стандартом отрасли. И свое знакомство с 3D моделями, будучи 15-летним подростком, я начал именно с 3Ds Max.\n',
          topic: '3D моделирование',
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
  methods: {
    toggleAutoScrol() {
      this.isAutoScroll = !this.isAutoScroll;
      this.setAutoScrol();
    },
    setAutoScrol() {
      if (this.isAutoScroll) {
        this.enableAutoScrol();
      } else {
        this.disableAutoScrol();
      }
    },
    enableAutoScrol() {
      this.timer = setInterval(() => {
        this.next();
      }, this.duration);
    },
    disableAutoScrol() {
      clearInterval(this.timer);
    },
    prev() {
      if (this.activeSlide > 0) {
        this.activeSlide += 1;
      } else {
        this.activeSlide = this.slides.length - 1;
      }
    },
    next() {
      if (this.activeSlide < this.slides.length - 1) {
        this.activeSlide += 1;
      } else {
        this.activeSlide = 0;
      }
    },
    setSlide(index) {
      this.activeSlide = index;
    },
  },
  beforeMount() {
    this.setAutoScrol();
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
   padding: 10px;
   margin: -10px;
 }

 .nav-indicator__line {
   width: 70px;
   height: 6px;
   background: #F7F7F7;
   margin-right: 30px;
   opacity: 1;
 }

 .arrow_prev {
   transform: rotate(180deg);
 }

 .nav-indicator__item_active .nav-indicator__line {
   background: #14A5DA;
 }

 .fade-enter-active, .fade-leave-active {
   transition: opacity .5s;
 }

 .fade-enter, .fade-leave-to {
   opacity: 0;
 }


</style>
