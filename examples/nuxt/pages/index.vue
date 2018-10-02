<template lang="pug">
section
  div(style="margin-bottom: 20px;")
    button(@click="btnStatus = false") enable recaptcha button
  g-recaptcha(data-sitekey="6LdTpxUUAAAAAG6L89kxRvjMdP0XDAyUji8rtQxw", :data-validate="validate", :data-callback="callback", :data-btn-class="'btn'", :data-btn-disabled="btnStatus") Submit form
</template>
<script>
import gRecaptcha from '~/../../dist/index';
// import gRecaptcha from '../../../../src/reCaptchaComponent.vue';
export default {
  components: {
    gRecaptcha,
  },
  data() {
    return {
      btnStatus: true,
    };
  },
  methods: {
    validate() {
      // validate your form , if you don't have validate prop , default validate pass .
      return true;
    },
    callback(token) {
      // google recaptcha token , then you can pass to backend with your form data .
      if (token) {
        alert(token);
      }else{
        // if you use data-size show reCAPTCHA , maybe you will get empty token.
        alert('please check you are not robot');
      }
    },
  },
}
</script>

<style>
.btn {
  border: 1px solid red;
}
</style>
