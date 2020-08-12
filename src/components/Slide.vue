<template>

  <a :href="slide.href" :style="sliderstyle" class="slide">
<div class="container">
        <div class="topic">{{slide.topic}}</div>
        <div class="title">{{slide.title}}</div>
        <div class="description">{{slide.description}}</div>
</div>
  </a>
</template>

<script>
export default {
  name: 'Slide',
  props: ['slide'],
  computed: {
    sliderstyle() {
      return { 'background-image': 'url(' + this.slide.img + ')' };
    },
  }
};
</script>

<style lang="scss" scoped>
 .slide {
   height: 600px;
   width: 100%;
   display: block;
   overflow: hidden;
   position: absolute;
   background-position: center;
   background-repeat: no-repeat;
   color: white;
   text-decoration: none;

   .topic {
     padding: 6px 14px;
     background: #14A5DA;
     text-transform: uppercase;
     color: white;
     display: inline-block;
     margin-top: 116px;
   }

   .title {
     font-size: 46px;
   }
   @media screen and (min-width: 1920px){
     background-size: 100%;
   }
 }
</style>
