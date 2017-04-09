# vue2-recaptcha-invisible

> vue.js 2 component for google reCAPTCHA invisible

## how to install
npm
```bash
npm install @finpo/vue2-recaptcha-invisible
```
yarn
```bash
yarn add @finpo/vue2-recaptcha-invisible
```

## how to use
```vue
<template>
<section>
  <g-recaptcha 
    data-sitekey="6LdTpxUUAAAAAG6L89kxRvjMdP0XDAyUji8rtQxw" 
    :data-validate="validate"
    :data-callback="callback" >
  </g-recaptcha>
  <!-- g-recaptcha will replace a button for submit form -->
</section>
</template>
<script>
import gRecaptcha from '@finpo/vue2-recaptcha-invisible';
export default {
  components: {
    gRecaptcha,
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
```

## props
prop | type | desc
---- | ---- | ----
data-sitekey | String | your front-end api key from google
data-callback | Function | receive google reCAPTCHA response token 
data-validate | Function | you can validate your form before get token ( only validate return true )
data-badge | String | bottomright(default) , bottomleft , inline
data-type | String | audio , image(default)
data-tabindex | String | 0
data-size |   | if you want show reCAPTCHA (I'm not robot chekcbox) on screen , add this attribute

## online demo
[demo](https://vue2-recaptcha-invisible.surge.sh/)

