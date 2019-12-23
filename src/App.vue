<template>
  <div id="app">
    <div class="nav">
      <span class="toggle" v-on:click= "changeLocale">EN / 中文</span>
    </div>
    <h1 class="slg">{{ $t('message.slogen') }}</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      slogen: '',
      linklable: ''
    }
  },
  methods: {
    changeLocale: function () {
      if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'cn'
      } else {
        this.$i18n.locale = 'en'
      }
    }
  }
}
</script>

<style>
html {
  background: url(assets/ul-background-all.png) no-repeat center bottom fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.toggle {
  position: fixed;
  top: 10px;
  right: 50px;
  cursor:grab;
}
.slg {
  position: fixed;
  left: 10%;
  right: 10%;
  width: 80%;
  top: 20%;
  font-weight: 600;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #505050;
}
.document {
  position: fixed;
  width: 100%;
  bottom: 5%;
  color: #fff;
  font-weight: 400;
}
</style>
