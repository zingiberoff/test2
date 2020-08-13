<template>

    <div class="container">
      <div class="news">
          <div class="row">
              <div v-for="(newsItem, index) in showItems" class="col-12 news__item"
                   :class="(index+1)%3?' col-md-6': 'col-md-12'">
                <img :src="newsItem.image" :alt="newsItem.title">
                <div class="overlay">{{index+1}}</div>
              </div>
          </div>
          <div class="news__more" @click="more()">показать еще</div>
        </div>
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
      console.log(this.items);
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

<style scoped lang="scss">
  .news__list {
    display: flex;
    grid-gap: 30px;
    grid-template-columns: 50% 50%;
    grid-auto-rows: 300px;
  }

  .news__more {
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    font: Bolder 14px/18px Montserrat;
  }

  .news__item {
    position: relative;
    height: 300px;
    margin-bottom: 30px;

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
      text-align: center;
      font: Bold 161px/300px Montserrat;
      color: #F7F7F7;
    }
  }
</style>
