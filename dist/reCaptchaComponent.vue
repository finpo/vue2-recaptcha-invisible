<template>
  <button @click="submitData">
    <slot>SUBMIT</slot>
  </button>
</template>

<script>
/*
global window document
*/
if (typeof window !== 'undefined') {
  window.recaptchaLoaded = new Promise((resolve) => {
    window.vueRecaptchaInit = resolve;
  });
  const recaptchaScript = document.createElement('script');
  recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaInit&render=explicit');
  recaptchaScript.setAttribute('async', '');
  recaptchaScript.setAttribute('defer', '');
  document.body.appendChild(recaptchaScript);
}

export default {
  props: {
    sitekey: String,
    callback: Function,
    validate: Boolean,
    badge: String,
    type: String,
    tabindex: String,
    szie: String,
  },
  data() {
    return {
      recaptchaId: 0,
    };
  },
  created() {
    if (typeof window === 'undefined') return;
    window.recaptchaLoaded.then(() => {
      try {
        const options = {
          sitekey: this.sitekey,
          callback: this.getToken,
        };
        if (typeof this.badge !== 'undefined') options.badge = this.badge;
        if (typeof this.type !== 'undefined') options.type = this.type;
        if (typeof this.tabindex !== 'undefined') options.tabindex = this.tabidex;
        if (typeof this.size !== 'undefined') options.size = this.size;
        this.recaptchaId = window.grecaptcha.render(this.$el, options);
      } catch (e) {
        window.console.warn(e);
      }
    });
  },
  methods: {
    submitData() {
      if (typeof window === 'undefined') return;
      if (this.validate || typeof this.validate === 'undefined') {
        window.grecaptcha.execute(this.recaptchaId);
      }
    },
    getToken(token) {
      if (typeof window === 'undefined') return;
      window.grecaptcha.reset(this.recaptchaId);
      this.callback(token);
    },
  },
};
</script>
