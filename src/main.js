// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      slogen: 'Building next-generation Robotic Process Automation platform enabling federated on-demand converged global network and multi-cloud service resource lake for enterprises.',
      linklabel: 'Welcome to check out our active service products here.'
    }
  },
  cn: {
    message: {
      slogen: '打造下一代机器人流程自动化平台，为企业构建按需联盟化的全球网络与多云服务融合资源湖。',
      linklabel: '欢迎点击这里浏览我们当前的服务产品.'
    }
  }
}

const i18n = new VueI18n({
  locale: 'cn', // set locale
  messages // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
