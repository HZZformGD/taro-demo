<template>
  <view class="index" id="tttttttt">
    <input
      type="text"
      v-debounceInput="inputChange"
      :value="text"
      placeholder="最大输入长度为 10"
      maxlength="10"
    />
    <button @tap="goto">跳转</button>
  </view>
</template>

<script>
import { login } from "../../services/common";
import Taro from "@tarojs/taro";
export default {
  name: "Index",
  data() {
    return {
      text: ""
    };
  },
  mounted() {
    // this.invokeLogin();
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
