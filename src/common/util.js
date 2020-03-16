// 一个防抖的方法
export function debounce(obj,func, args = [], delay = 100) {
  let timer = null;
  return function () {
    if (timer != null) { clearTimeout(timer); }
    timer = setTimeout(() => {
      func.apply(obj, ...args);
    }, delay);
  };
}