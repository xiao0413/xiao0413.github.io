/**
 * Created by yoyo on 2017-09-06.
 */
function animate(element, styleName, target) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    //1 获取元素当前位置
    //使用||0，用于对"auto"进行处理，保证不会出现计算的错误
    var current = parseInt(getStyle(element, styleName)) || 0;
    //2 设置变速运动公式
    var step = (target - current) / 10;
    //对步长进行取整操作,正数向上取整，负数向下取整
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    
    current = current + step;
    //3 设置给用户需要修改的样式名
    element.style[styleName] = current + "px";
    //4 到达指定位置清除定时器即可
    if (current == target) {
      clearInterval(element.timer);
    }
  }, 20);
}

function getStyle(element, styleName) {
  //currentStyle   getComputedStyle
  if (element.currentStyle) {
    return element.currentStyle[styleName];
  } else {
    return getComputedStyle(element, null)[styleName];
  }
}
