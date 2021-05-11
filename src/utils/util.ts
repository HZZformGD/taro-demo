/**
 * 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
 * @param fn {function}  需要调用的函数
 * @param delay  {number}    延迟时间，单位毫秒
 * @param immediate  {bool} 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
 * @return {function}实际调用函数
 */
function throttle(fn, delay, immediate, debounce) {
  let curr = +new Date(), //当前事件
    last_call: number = 0,
    last_exec: number = 0,
    timer: any = null,
    diff: number, //时间差
    context: any, //上下文
    args: any,
    exec: Function = function() {
      last_exec = curr;
      fn.apply(context, args);
    };
  return function() {
    curr = +new Date();
    (context = this),
      (args = arguments),
      (diff = curr - (debounce ? last_call : last_exec) - delay);
    clearTimeout(timer);
    if (debounce) {
      if (immediate) {
        timer = setTimeout(exec, delay);
      } else if (diff >= 0) {
        exec();
      }
    } else {
      if (diff >= 0) {
        exec();
      } else if (immediate) {
        timer = setTimeout(exec, -diff);
      }
    }
    last_call = curr;
  };
}

/**
 * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 delay，fn 才会执行
 * @param fn {function}  要调用的函数
 * @param delay   {number}    空闲时间
 * @param immediate  {bool} 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
 * @return {function}实际调用函数
 */

function debounce(fn: Function, delay: Number, immediate: Boolean): Function {
  return throttle(fn, delay, immediate, true);
}

const compareVersion = (v1: string | any, v2: string | any): number => {
  v1 = v1.split(".");
  v2 = v2.split(".");
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push("0");
  }
  while (v2.length < len) {
    v2.push("0");
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]);
    const num2 = parseInt(v2[i]);

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
};

export { debounce, compareVersion };
