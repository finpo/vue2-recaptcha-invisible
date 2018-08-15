<template>
<div>
  <div>
    <button @click="submitData" :class="dataBtnClass" :disabled="dataBtnDisabled">
      <slot>SUBMIT</slot>
    </button>
  </div>
</div>
</template>

<script>
/*
global window document
*/
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
    dataBtnClass: [String, Array, Object],
    dataBtnDisabled: Boolean,
    dataLanguage: String,
  },
  data() {
    return {
      recaptchaId: 0,
      vueRecaptchaInit: 0,
    };
  },
  created() {
    if (typeof window === 'undefined') return;
    window.vueRecaptchaInit = () => {
      this.vueRecaptchaInit++;
    };
    const recaptchaScript = document.createElement('script');
    const language = this.dataLanguage ? `&hl=${this.dataLanguage}` : '';
    recaptchaScript.setAttribute('src', `https://www.google.com/recaptcha/api.js?onload=vueRecaptchaInit&render=explicit${language}`);
    recaptchaScript.setAttribute('async', '');
    recaptchaScript.setAttribute('defer', '');
    (document.body || document.head).appendChild(recaptchaScript);
  },
  watch: {
    vueRecaptchaInit() {
      try {
        const options = {
          sitekey: this.dataSitekey,
        };
        if (typeof this.dataBadge !== 'undefined') options.badge = this.dataBadge;
        if (typeof this.dataType !== 'undefined') options.type = this.dataType;
        if (typeof this.dataTabindex !== 'undefined') options.tabindex = this.dataTabindex;
        if (typeof this.dataSize === 'undefined') {
          options.size = 'invisible';
          options.callback = this.getToken;
        }
        const recaptchaDiv = document.createElement('div');
        recaptchaDiv.className = 'outside-badge';
        this.$el.insertBefore(recaptchaDiv, this.$el.childNodes[0]);
        this.recaptchaId = window.grecaptcha.render(recaptchaDiv, options);
      } catch (e) {
        window.console.error(e);
      }
    },
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
