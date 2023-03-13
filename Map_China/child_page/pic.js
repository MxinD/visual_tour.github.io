(function () {
  const top_li = document.querySelectorAll('.privence main .top li')
  const top_span = document.querySelectorAll('.privence main .top li span')

  var bot_li = document.querySelectorAll('.privence main .bot .right li')
  var bot_li_img = document.querySelectorAll('.privence main .bot .right li img')
  var bot_span = document.querySelectorAll('.privence main .bot .right li span')

  for(let i = 0;i < top_li.length;i++){
    top_li[i].addEventListener('mousemove',function(){
      top_span[i].style.bottom = '20%'
    })
    top_li[i].addEventListener('mouseout',function(){
      top_span[i].style.bottom = '-50%'
    })

  }

  for (let i = 0; i < bot_li.length; i++) {
    bot_li[i].addEventListener('mousemove', function () {
      bot_li_img[i].style.transform = 'scale(1.2)'
      bot_span[i].style.color = '#fff'
      bot_span[i].style.backgroundColor = 'rgba(0, 0, 0,.3)'
    })

    bot_li[i].addEventListener('mouseout', function () {
      bot_li_img[i].style.transform = ''
      bot_span[i].style.color = 'rgba(255, 255, 255,0)'
      bot_span[i].style.backgroundColor = ''
    })
  }
})()