window.addEventListener('load', function () {
  var arrow_l = document.querySelector('.arrow_l')//获取左右按钮
  var arrow_r = document.querySelector('.arrow_r')
  var main = document.querySelector('main')// 获取放图片的大盒子
  var mainwidth = main.offsetWidth//获取大盒子长度

  // 鼠标移动到盒子内部让左右按钮显示出来
  main.addEventListener('mouseenter', function () {
      arrow_l.style.display = 'block'
      arrow_r.style.display = 'block'
      clearInterval(timer);
  })
  // 鼠标离开盒子 按钮隐藏
  main.addEventListener('mouseleave', function () {
      arrow_l.style.display = 'none'
      arrow_r.style.display = 'none';
      timer = setInterval(function(){
          // 手动调用点击事件
          arrow_r.click();
      },900)
  
  })

  // 获取装小圆点的ol
  var ol = main.querySelector('.circle')
  // 获取装图片小的li的 ul
  var ul = main.querySelector('.img')

  var num = 0;
  // 右侧按钮播放图片
  var circle = 0;

  // ul.children是所有 li;有多少个ul的li就创建几个ol的li
  for (var i = 0; i < ul.children.length; i++) {
      // 给circle中创建 li
      var li = document.createElement('li')
      // 将创建的 li 添加到 ol 中
      ol.appendChild(li)
// 记录当前小圆圈li的索引号,通过自定义属性来做,给li添加index属性值为i;
      li.setAttribute('index', i);

      // 给创建的li添加点击事件
      li.addEventListener('click', function () {
          // 清除所有小圆圈的 current 类名
          for (var j = 0; j < ol.children.length; j++) {
              ol.children[j].className = '';
          }
          // 当我们点击了 某个 li 就拿到当前 li 的索引号
          var index = this.getAttribute('index');
          num = index
          circle = index
          //给点击的这个li添加类属性
          this.className = 'current';
          // ul的移动距离 = li 的索引号 * 图片宽度
          animate(ul, -index * mainwidth)//使用之前封装的函数animate
      })
  }
  // 将第一个 li 类名设置为 current
  ol.children[0].className = 'current'

  // 6,克隆第一张图片(li)放到ul最后
  var first = ul.children[0].cloneNode(true)//克隆
  ul.appendChild(first)//添加到 ul 最后

  // flag 节流阀
  var flag = true;

// 右侧按钮播放图片----------------------------------------
  arrow_r.addEventListener('click', function () {
      if(flag){
          flag = false;
          // 当点击第5=ul.children.length-1次时，也就是到了最后一张被克隆出来的图片
          if (num == ul.children.length-1) { 
          //在当前图片是 最后一张被克隆的图片时 点击后
              ul.style.left = 0;
              num = 0;
          }//此时图片已经到了第一张(肉眼不会察觉)
          num++;
          animate(ul, -num * mainwidth,function(){
              flag = true
          });
  // ---------------
          circle++;
          // 如果circle == ol里面小li的长度 说明走到最后我们克隆的这张图片了
          if(circle == ol.children.length){
              circle = 0;
          }
          // 先清除其余小圆圈的current 类名
          for(var i = 0;i < ol.children.length;i++){
              ol.children[i].className = '';
          }
          // 留下当前小圆圈的类名
          ol.children[circle].className = 'current';
      }
  });

// 左侧按钮播放----------------------------------------------------
  arrow_l.addEventListener('click', function () {
      // 节流阀
      if(flag){
          
          flag = false
          if (num==0){
              num = ol.children.length;
              ul.style.left = -num*mainwidth +'px';
          }
          num--;
          animate(ul, -num * mainwidth,function(){
              flag = true;
          });
  // --------------
          circle--;
          if(circle<0){
              circle = ol.children.length-1
          }
          // 先清除其余小圆圈的current 类名
          for(var i = 0;i < ol.children.length;i++){
              ol.children[i].className = '';
          }
          // 留下当前小圆圈的类名
          ol.children[circle].className = 'current';
      }
  });

  // 10.自动播放轮播图
//   var timer = setInterval(function(){
//       // 手动调用点击事件
//       arrow_r.click();
//   },900)

  
})