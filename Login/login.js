(function () {
  var admin = document.querySelector('.admin')
  var pwd = document.querySelector('.password')
  var login_btn = document.querySelector('.login_btn')
  var reset_btn = document.querySelector('.reset_btn')
  var email = document.querySelector('.email')
  var re_email = /\w+@\w+(\.\w+)+/

  console.log(admin)
  login_btn.addEventListener('click', function () {
    user = admin.value.trim()
    password = pwd.value.trim()

    if ((user == 'admin0' && password == '000') || (user == 'admin1' && password == '111')) {
      if (re_email.test(email.value)) {
        // alert('登陆成功！')
        function home(){
          localStorage.setItem('login_key','true')
          top.location.href='../index.html'
          // window.open('../index.html')
        }
        home()
      }else{
        alert('邮箱格式错误,请重新输入')
      }
    }else if(user=='' || password==''){
      alert('请输入用户名、密码、邮箱')
    }else {
      alert('用户名或密码输入错误，请重新输入')
    }
  })

  reset_btn.addEventListener('click',function(){
    admin.value = ''
    pwd.value = ''
    email.value = ''
  })
})()


