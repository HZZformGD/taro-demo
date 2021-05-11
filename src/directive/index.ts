import Vue from "vue";
import { debounce } from "../utils/util";

Vue.directive("debounceInput", {
  bind(el, binding) {
    let execFun;
    if (typeof binding.value === "object") {
      const { func, time = 50 } = binding.value;
      execFun = debounce(func, time, false);
    } else {
      execFun = debounce(binding.value, 50, false);
    }
    el.unbindEventListener = () => {
      el.removeEventListener("input", execFun);
    };
    el.addEventListener("input", execFun);

    // binding.value()
  },
  unbind(el: any) {
    if (typeof el.unbindEventListener === "function") {
      el.unbindEventListener();
    }
  }
});
