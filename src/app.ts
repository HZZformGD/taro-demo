import Vue from "vue";
import store from "./store";
import "./app.less";
import "./directive/index";
import Taro from "@tarojs/taro";

Vue.config.productionTip = false;

const App = {
  store,
  onShow(options) {},
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h("block", this.$slots.default);
  }
};
wx.onAppRoute(route => {
  const current = Taro.getCurrentPages()[Taro.getCurrentPages().length - 1];
  console.log("当前路由对象：", route, "taro:", current);
});

export default App;
