# vue2-recaptcha-invisible

> vue.js 2 component for google reCAPTCHA invisible

## how to install
```bash
npm install @finpo/vue2-recaptcha-invisible
```

## how to use
```vue
<template>
<section>
  <g-recaptcha 
    sitekey="6LdTpxUUAAAAAG6L89kxRvjMdP0XDAyUji8rtQxw" 
    validate="validate"
    :callback="callback" >
  </g-recaptcha>
  <!-- g-recaptcha will replace a button for submit form -->
</section>
</template>
<script>
import gRecaptcha from 'vue2-recaptcha-invisible';
export default {
  components: {
    gRecaptcha,
  },
  methods: {
    validate() {
      //validate your form , if you don't have validate prop , default validate pass .
      return true;
    },
    callback(token) {
      //google recaptcha token , then you can pass to backend with your form data .
      alert(token);
    },
  },
}
</script>
```

## props
sitekey | String | your front-end api key from google
callback | Function | receive google reCAPTCHA response token 
validate | Boolean | you can validate your form before get token
badge | String | bottomright(default) , bottomleft , inline
type | String | audio , image(default)
tabindex | String | 0

## online demo
[demo](https://vue2-recaptcha-invisible.surge.sh/)

