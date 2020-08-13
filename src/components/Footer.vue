<template>
<footer>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4 contacts">
        <div class="logo">LOGOTYPE</div>
        <div class="addresse">г. Москва, метро Бауманская, ул. Бауманская, дом 44</div>
        <div class="phone">+7 000 000 00 00</div>
      </div>
      <div class="col-12 col-md-8 footer-content">
      <div class="footer-menu">
        <ul>
           <li><a href="/about">О компании</a></li>
           <li><a href="/partner">Партнёрская программа</a></li>
           <li><a href="/adv">Реклама</a></li>
           <li><a href="/press">Пресс-центр</a></li>
           <li><a href="/job">Вакансии</a></li>
           <li><a href="/help">Помощь</a></li>
           </ul>
      </div>
        <div class="row">
          <div class="col-12 col-md-6">

            <div class="social">
             <h6 class="social__title">Мы в соц. сетях</h6>
              <div class="social__items">
                <a href="https://facebook.com">
                  <img alt="facebook" src="../assets/images/facebook-letter-logo.svg">
                </a>
                <a href="https://odnoklassniki.ru">
                  <img alt="odnoklassniki" src="../assets/images/odnoklassniki.svg">
                </a>
                <a href="https://instagram.com">
                  <img alt="instagram" src="../assets/images/instagram-logo.svg">
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
          <SubscribeFormLite></SubscribeFormLite>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="subfooter">
    <div class="container flex flex_justify-between">
      <div class="copyright hide-xs">© ООО «Глобус», 2016 — 2019</div>
      <div class="subfooter__info">
        <a href="/policy">Политика конфиденциальности</a>
        <a href="/cookies">Cookies</a>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
  import SubscribeFormLite from './SubscribeFormLite.vue'

  export default {
    name: "Footer",
    components: { SubscribeFormLite }
  }
</script>

<style lang="scss" scoped>

  footer {
    padding-top: 30px;
    background: #DCE5E9;

    .logo {
      margin-bottom: 20px;
    }

    .addresse {
      margin-bottom: 59px;
    }

    .phone {
      margin-bottom: 33px;
    }

    a {
      color: black;
      text-decoration: none;
    }

    .footer-menu {
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 -12px;

        li {
          list-style: none;

          margin: 4px 12px;

        }
      }
    }

    .social__title {
      font-size: 14px;
      margin-bottom: 16px;
    }

    .social__items {
      a {
        margin-right: 12px;
      }
    }

    .subfooter {

      color: #DCE5E9;
      font-size: 12px;
      padding: 23px 0 22px;

      a {
        color: #DCE5E9;
        text-decoration: none;
      }

      .subfooter__info {
        width: 100%;
        max-width: 280px;
        display: flex;
        justify-content: space-between;
      }

      background: #001F2B
    }
  }

  @media (screen and max-width: 600px) {
    footer {
      text-align: center;
      padding-top: 20px;


      .logo {
        margin-bottom: 10px;
      }

      .addresse {
        margin-bottom: 20px;
      }

      .phone {
        margin-bottom: 26px;
      }
      .social{
        margin-bottom: 39px;
      }
    }
    .footer-menu {
      ul {
        flex-direction: column;
        align-items: center;
      }
    }
  }
</style>
