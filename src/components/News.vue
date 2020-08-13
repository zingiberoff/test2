<template>

      <div class="news">
          <div class="row">
              <div :class="(index+1)%3?' col-md-6': 'col-md-12'" class="col-12 news__item"
                   v-for="(newsItem, index) in showItems">
                <img :alt="newsItem.title" :src="newsItem.image">
                <div class="overlay">{{index+1}}</div>
              </div>
          </div>
          <div @click="more()" class="news__more">показать еще</div>
        </div>

</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      maxCount: 3,
      items: [
        {
          image: '/img/img_1.jpg',
          title: 'Новость_1',
        },
        {
          image: '/img/img_2.jpg',
          title: 'Новость_2',
        },
        {
          image: '/img/img_3.jpg',
          title: 'Новость_3',
        },
        {
          image: '/img/img_2.jpg',
          title: 'Новость_4',
        },
        {
          image: '/img/img_3.jpg',
          title: 'Новость_5',
        },
        {
          image: '/img/img_1.jpg',
          title: 'Новость_6',
        },
        {
          image: '/img/img_2.jpg',
          title: 'Новость_7',
        },
      ],
    };
  },
  computed: {
    showItems() {
      return this.items.slice(0, this.maxCount);
    },
  },
  methods: {
    more() {
      if (this.maxCount < this.items.length) {
        this.maxCount = Math.min(this.maxCount + 3, this.items.length);
      }

    },
  },
};
</script>

<style lang="scss" scoped>
  .news__list {
    display: flex;
  }

  .news__more {
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    font: Bolder 14px/18px Montserrat;
    margin-bottom: 77px;
  }

  .news__item {
    position: relative;
    max-height: 300px;
    margin-bottom: 30px;
    overflow: hidden;

    img {
      width: 100%
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: black;
      opacity: 0.46;
      font: Bold 161px Montserrat;
      vertical-align: middle;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #F7F7F7;
    }
  }
  @media (screen and max-width: 600px){
    .news__item{
      img{
        height: 100%;
      }
    }
  }
</style>
