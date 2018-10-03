(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();










/*
global window document
*/
var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',[_c('button',{class:_vm.dataBtnClass,attrs:{"disabled":_vm.dataBtnDisabled},on:{"click":_vm.submitData}},[_vm._t("default",[_vm._v("SUBMIT")])],2)])])},staticRenderFns: [],
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
  data: function data() {
    return {
      recaptchaId: 0,
      vueRecaptchaInit: 0,
    };
  },
  created: function created() {
    var this$1 = this;

    if (typeof window === 'undefined') { return; }
    window.vueRecaptchaInit = function () {
      this$1.vueRecaptchaInit++;
    };
    var recaptchaScript = document.createElement('script');
    var language = this.dataLanguage ? ("&hl=" + (this.dataLanguage)) : '';
    recaptchaScript.setAttribute('src', ("https://www.google.com/recaptcha/api.js?onload=vueRecaptchaInit&render=explicit" + language));
    recaptchaScript.setAttribute('async', '');
    recaptchaScript.setAttribute('defer', '');
    (document.body || document.head).appendChild(recaptchaScript);
  },
  watch: {
    vueRecaptchaInit: function vueRecaptchaInit() {
      try {
        var options = {
          sitekey: this.dataSitekey,
        };
        if (typeof this.dataBadge !== 'undefined') { options.badge = this.dataBadge; }
        if (typeof this.dataType !== 'undefined') { options.type = this.dataType; }
        if (typeof this.dataTabindex !== 'undefined') { options.tabindex = this.dataTabindex; }
        if (typeof this.dataSize === 'undefined') {
          options.size = 'invisible';
          options.callback = this.getToken;
        }
        var recaptchaDiv = document.createElement('div');
        recaptchaDiv.className = 'outside-badge';
        this.$el.insertBefore(recaptchaDiv, this.$el.childNodes[0]);
        this.recaptchaId = window.grecaptcha.render(recaptchaDiv, options);
      } catch (e) {
        window.console.error(e);
      }
    },
  },
  methods: {
    submitData: function submitData(event) {
      event.preventDefault();
      if (typeof window === 'undefined') { return; }
      if (this.dataValidate() === true || typeof this.dataValidate === 'undefined') {
        if (typeof this.dataSize === 'undefined') {
          window.grecaptcha.execute(this.recaptchaId);
        } else {
          this.getToken(window.grecaptcha.getResponse(this.recaptchaId));
        }
      }
    },
    getToken: function getToken(token) {
      if (typeof window === 'undefined') { return; }
      window.grecaptcha.reset(this.recaptchaId);
      this.dataCallback(token);
    },
  },
};

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('Vue2RecaptchaInvisible', component);
}

// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// To auto-install when vue is found
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default component;
export { install };
