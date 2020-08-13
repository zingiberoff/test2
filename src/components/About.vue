<template>
  <div class="about">
    <div class="row">
      <div class="col-12 col-md-4">
        <h2>о компании</h2>
      </div>
      <div class="col-12 col-md-8">
        <div class="description">
          Что-то более продвинутое делается с помощью покадровой анимации — когда для разных
          состояний объекта (стоит, идет, в прыжке, атакует) создается несколько спрайтов
          (двумерное изображение), которые сменяют друг друга с определенным интервалом.
          <a class="more-details" href="/about">подробнее</a>
        </div>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
  .about {
    margin-top: 70px;
    margin-bottom: 80px;


  h2 {
    text-transform: uppercase;
    font: Bold 32px/39px Montserrat
  }

  .description {
    min-height: 140px;
    font: 16px/26px Montserrat;
    position: relative;
  }

  .more-details {
    position: absolute;
    bottom: 0;
    left: 0;
    text-transform: uppercase;
    font: bolder 14px Montserrat;
    color: black;
    text-decoration: none;

    &::after {
      color: gray;
      content: '';
      width: 18px;
      height: 12px;
      margin-left: 16px;
      background: url('../assets/images/left-arrow-black.svg') 100%;
      display: inline-block;
    }
  }
    @media screen and (max-width: 600px) {
      margin-bottom: 30px;
      h2 {
        text-align: center;
        font-size: 16px;
      }
      .description {
        font-size: 10px;
        line-height: 14px;
        min-height: unset;
      }
      .more-details {
        margin-top: 10px;
        font-size: 10px;
        display: block;
        position: relative;
        text-align: center;
        &::after {
          margin-left: 6px;
        }
      }
    }
  }
</style>
