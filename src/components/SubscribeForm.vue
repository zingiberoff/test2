<template>
  <div class="subscribeForm">
    <form @submit.prevent="submitForm" action="">
      <h3 class="form-title">
          подпишитесь на рассылку
      </h3>
      <div class="form-body row">
        <div :class="{error:name.error}" class="form-group col-12 col-md-6">
          <label for="inputName" v-if="name.error">{{name.error}}</label>
          <label for="inputName" v-else-if="name.active">{{ name.title}}</label>
          <input
            @focusin="name.active=true;name.error=false"
            @focusout="name.active=false;validateName()"
            @input="validateName"
            class="form-control"
            id="inputName"
            placeholder="Введите имя"
            v-model="name.value">

        </div>
        <div :class="{error:email.error}" class="form-group col-12 col-md-6">
          <label for="inputEmail" v-if="email.error">{{email.error}}</label>
          <label for="inputEmail" v-else-if="email.active">{{email.title}}</label>
          <input
            @focusin="email.active=true;email.error=false"
            @focusout="email.active=false;validateEmail()"
            class="form-control"
            id="inputEmail"
            placeholder="example@mail.com"
            v-model="email.value">
        </div>
        <div :class="{error:comment.error}" class="form-group col-12">
          <label class="error" for="inputEmail" v-if="comment.error">{{comment.error}}</label>
           <label for="inputEmail" v-else-if="comment.active">{{comment.title}}</label>

          <textarea :placeholder="comment.title"
                    @focusin="comment.active=true;comment.error=false"
                    @focusout="comment.active=false;validateComment()"
                    class="form-control"
                    id="inputComment"
                    rows="3"
                    v-model='comment.value'></textarea>
        </div>
      </div>
      <button :disabled="!formValid" type="submit" class="subscribe">Подписаться</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SubscribeForm',
  data() {
    return {
      formSubmited: false,
      name: { title: 'Имя', value: '', error: false, active: false },
      email: { title: 'Email', value: '', error: false, active: false },
      comment: { title: 'Коментарии', value: '', error: false, active: false },

    }

  },
  computed: {
    formValid() {
      return !this.name.error && !this.email.error && !this.comment.error;
    }
  },
  methods: {
    submitForm() {
      this.formSubmited = this.checkForm();
    },
    checkForm() {
      console.log('checkForm');
      this.validateName();
      this.validateEmail();
      this.validateComment();
      return !this.name.error && !this.email.error && !this.comment.error;
    },
    validateComment() {
      this.comment.error = this.comment.value.trim() ? false : 'Заполните поле';
    },
    validateName() {
      var re = /^\D+$/;

      this.name.error = this.name.value.trim() ? false : 'Заполните поле';
      if (this.name.error) return;
      this.name.error = re.test(this.name.value) ? false : 'Цифры в имени не допустимы';
      console.log(this.name.error)

    },
    validateEmail() {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.email.error = this.email.value.trim() ? false : 'Заполните поле';
      if (this.email.error) return;
      this.email.error = re.test(this.email.value) ? false : 'ведите валидный email';

    }
  }
};
</script>

<style lang="scss" scoped>
 .subscribeForm {
   border: solid 1px #14A5DA1F;
   position: relative;
   margin-bottom: 20px;

   &::before {
     content: '';
     width: 0;
     height: 0;
     position: absolute;
     border: 39px solid transparent;
     border-left: 39px solid #14A5DA1F;
     border-top: 39px solid #14A5DA1F;
   }

   &::after {
     content: '';
     position: absolute;
     top: 11px;
     left: 12px;
     background: transparent url('../assets/images/RSS.svg') 0% 0% no-repeat padding-box;
     width: 21px;
     height: 21px;
   }
 }

 form {
   max-width: 570px;
   margin: 42px auto 33px;

   .form-title {
     text-transform: uppercase;
     text-align: center;
   }
   .subscribe{
     max-width: 270px;
     width: 100%;
     background: #14A5DA;
     padding: 11px 32px;
     text-align: center;
     text-transform: uppercase;
     margin: auto;
     display: block;
     border: none;
     color: white;
     border-radius: 2px;
   }
 }
 @media (screen and max-width: 600px){
   form {
     max-width: 220px;
   }

 }

 .form-group {
   position: relative;
   margin-bottom: 20px;

   label {
     margin-left: 16px;
     font-size: 8pt;
     position: absolute;
   }

   input, textarea {
     box-sizing: border-box;
     border: 1px solid #14A5DA;
     margin-top: 20px;
     width: 100%;
     font: 14px/18px Montserrat;
   }

   &.error {
     label {
       color: #E76400
     }

     input, textarea {
       border-color: #E76400;
     }
   }
 }
</style>
