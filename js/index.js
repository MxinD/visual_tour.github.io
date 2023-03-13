// Tour 首页的 部分

// 登录、退出
(function () {
  var login_succeed = document.querySelectorAll('.login_succeed')
  var ligin_btn = document.querySelector('.ligin_btn')
  var exit_btn = document.querySelector('.exit')

  var login_key = localStorage.getItem('login_key')

  var Login = function () {
    for (let i = 0; i < login_succeed.length; i++) {
      if (login_key) {
        login_succeed[i].style.display = 'block'
        ligin_btn.style.display = 'none'
        exit_btn.style.display = 'block'
      }
    }
  }
  exit_btn.onclick = function () {
    console.log('asdfghj')
  }

  exit_btn.addEventListener('click', function () {
    for (let i = 0; i < login_succeed.length; i++) {
      login_succeed[i].style.display = 'none'
      ligin_btn.style.display = 'block'
      exit_btn.style.display = 'none'
      localStorage.removeItem('login_key')
    }
  })

  Login();
  // 搜索部分
  var search = function () {
    var cut = document.querySelector('.baidu_cut')
    var search_text = document.querySelector('.search_text')
    var sub_search = document.querySelector('.sub_search')

    var flag = true
    cut.addEventListener('click', function () {
      if(flag){
        // true
        this.value = '省区搜索'// false
        flag = !flag
      }else{
        // false
        this.value = '百度搜索'// true
        flag = !flag
      }
    });

    sub_search.addEventListener('click',function(){
      // console.log(search_text)
      To_text = search_text.value.trim()
      if(flag){
        if(To_text == ' '){
          alert('请输入有效内容')
        }else{
          window.open('https://www.baidu.com/s?wd='+To_text)
        }
      }else{
        let low_prov = ['河北','山西','辽宁','吉林','黑龙江','江苏','浙江','安徽']
        let gorge_prov = ['福建','江西','山东','河南','湖北','湖南','广东','海南','山东','海南']
        let many_prov = ['四川','贵州','云南','陕西','甘肃','青海','台湾','内蒙古','广西','西藏','宁夏','新疆','北京','天津','上海','重庆','香港','澳门']
        if(low_prov.indexOf(To_text) !== -1){
          window.open('./Map_China/child_page/pro_child.html#'+To_text)
        }
        if(gorge_prov.indexOf(To_text) !== -1){
          window.open('./Map_China/child_page/gorge_prov/'+To_text+'.html')
        }
        if(many_prov.indexOf(To_text) !== -1){
          localStorage.setItem('province',To_text)
          console.log(To_text)
          window.open('./Map_China/child_page/many.html')
        }
      }
    })
  }
  search();
})()

// 搜索部分








