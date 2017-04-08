<template>
  <section>
    <div ref="reCaptcha"></div>
    <button @click="submitData">
      <slot>SUBMIT</slot>
    </button>
  </section>
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
    dataSitekey: String,
    dataCallback: Function,
    dataValidate: Function,
    dataBadge: String,
    dataType: String,
    dataErrorcallback: Function,
    dataTabindex: String,
    dataSize: String,
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
          sitekey: this.dataSitekey,
        };
        if (typeof this.dataBadge !== 'undefined') options.badge = this.dataBadge;
        if (typeof this.dataType !== 'undefined') options.type = this.dataType;
        if (typeof this.dataTabindex !== 'undefined') options.tabindex = this.dataTabidex;
        if (typeof this.dataSize === 'undefined') {
          options.size = 'invisible';
          options.callback = this.getToken;
        }
        this.recaptchaId = window.grecaptcha.render(this.$refs.reCaptcha, options);
      } catch (e) {
        window.console.warn(e);
      }
    });
  },
  methods: {
    submitData(event) {
      event.preventDefault();
      if (typeof window === 'undefined') return;
      if (this.dataValidate() === true || typeof this.dataValidate === 'undefined') {
        if (typeof this.dataSize === 'undefined') {
          window.grecaptcha.execute(this.recaptchaId);
        } else {
          this.getToken(window.grecaptcha.getResponse(this.recaptchaId));
        }
      }
    },
    getToken(token) {
      if (typeof window === 'undefined') return;
      window.grecaptcha.reset(this.recaptchaId);
      this.dataCallback(token);
    },
  },
};
</script>
