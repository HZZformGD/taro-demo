<template>
  <view class="index">
    asd
  </view>
</template>

<script>
export default {
  name: "Test",
  components: {},
  onLoad(){
    console.info('ssss')
  },
  methods: {
    goto() {
      Taro.navigateTo({ url: "/pages/test/index" });
    },
    inputChange(e) {
      console.info(e.detail.value);
    },
    async invokeLogin() {
      const res = await login();
      if (res.ret === 0) {
      }
    }
  }
};
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
