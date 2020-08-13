<template>
  <form @submit.prevent="sendForm" action="" v-if="!subscribeSuccess">
    <div class="title">
      Подписка на новости
    </div>
    <input :class="{error:error}" placeholder="example@mail.com" type="text" v-model="email"> <button type="submit">Ok</button>
  </form>
  <div v-else>
    Вы подписаны на рассылку
  </div>
</template>

<script>
export default {
  name: "SubscribeFormLite",
  data() {
    return {
      email: '',
      error: false,
      subscribeSuccess: false,
    }
  },
  methods: {
    sendForm() {
      this.validateEmail()
      if (!this.error) {
        setTimeout(() => {
          this.subscribeSuccess= true;
          this.$emit('subscribeSuccess');
        },1000)
      }
    },
    validateEmail() {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.error = this.email.trim() ? false : 'Заполните поле';
      if (this.email.error) return;
      this.error = re.test(this.email) ? false : 'ведите валидный email';

    }
  }
}
</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }
input{
  border: none;
  border-radius: 2px;
  margin-top: 15px;
  margin-bottom: 36px;
  width: 215px;
  height: 30px;
  &.error{
    border: 1px #E76400 solid;
  }
}
  button{
    margin-left: 10px ;
    background: #14A5DA;
    color: white;
    border: none ;
    border-radius: 2px;
    padding: 6px 22px;
  }
</style>
