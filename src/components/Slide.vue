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
   background-position-y: 0;
   color: white;
   text-decoration: none;

   .topic {
     padding: 6px 14px;
     background: #14A5DA;
     text-transform: uppercase;
     color: white;
     display: inline-block;
     margin-top: 116px;
     transition: all .5s ease-in-out;
   }

   .title {
     font-size: 46px;
     margin-top: 36px;
     transition: all .5s ease-in-out;
   }

   .description {
     font-size: 24px;
     margin-top: 19px;
     transition: all .5s ease-in-out;
   }

   @media screen and (min-width: 1920px) {
     background-size: 100%;
   }
   @media screen and (max-width: 960px) {
     background-size:150%;
     .topic {
       margin-top: 34px;
       padding: 7px 11px;
       font-size: 10px;
     }
     .title {
       font-size: 30px;
       margin-top: 26px;
     }
     .description {
       margin-top: 16px;
       font-size: 18px;
     }

   }
   @media screen and (max-width: 600px) {
     .topic {
       padding: 7px 11px;
       font-size: 8px;
     }
     .title {
       font-size: 16px;
       margin-top: 16px;
     }
     .description {
       margin-top: 10px;
       font-size: 14px;
     }
   }

 }
</style>
