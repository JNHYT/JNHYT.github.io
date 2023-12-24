var dhbz = document.getElementsByClassName('dhbz');
var cbsskd = document.getElementById('cbsskd');
var cbsswz = document.getElementsByClassName('cbsswz');
var cbjava = document.getElementById('cbjava');
var cbsslogo = document.getElementById('cbsslogo');
var cbys = document.getElementsByClassName('cbys');

//点击导航栏第一个图标收缩侧边栏

dhbz[0].addEventListener('click', function () {

  if (yansebj[0].classList.contains('xz')) {
    if (cbsskd.classList.contains('ax')) {
      cbsskd.style.width = 'calc(100% / 6.55)';
      for (var i = 0; i < cbsswz.length; i++) {
        cbsswz[i].style.display = 'block';
      }
      cbjava.style.transform = 'scale(0.5,0.5) translate(-1px,-26.7px)';
      cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo1.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.9,0.85);';
      cbsskd.classList.remove('ax');
    } else {
      cbsskd.classList.add('ax');
      cbsskd.style.width = 'calc(100% / 19.55)';
      for (var c = 0; c < cbsswz.length; c++) {
        cbsswz[c].style.display = 'none';
      }
      cbjava.style.transform = 'scale(0.5,0.5) translate(-3px,-26.7px)';
      cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';

    }
  }

  if (yansebj[1].classList.contains('xz')) {
    if (cbsskd.classList.contains('ax')) {
      cbsskd.style.width = 'calc(100% / 6.55)';
      for (var i = 0; i < cbsswz.length; i++) {
        cbsswz[i].style.display = 'block';
      }
      cbjava.style.transform = 'scale(0.5,0.5) translate(-1px,-26.7px)';
      cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo2.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.9,0.85);';
      cbsskd.classList.remove('ax');
    } else {
      cbsskd.classList.add('ax');
      cbsskd.style.width = 'calc(100% / 19.55)';
      for (var c = 0; c < cbsswz.length; c++) {
        cbsswz[c].style.display = 'none';
      }
      cbjava.style.transform = 'scale(0.5,0.5) translate(-3px,-26.7px)';
      cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo22.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';

    }
  }

  if (yansebj[2].classList.contains('xz')) {
    if (cbsskd.classList.contains('ax')) {
      cbsskd.style.width = 'calc(100% / 6.55)';
      for (var i = 0; i < cbsswz.length; i++) {
        cbsswz[i].style.display = 'block';
      }
      cbjava.style.transform = 'scale(0.5,0.5) translate(-1px,-26.7px)';
      cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo3.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.9,0.85);';
      cbsskd.classList.remove('ax');
    } else {
      cbsskd.classList.add('ax');
      cbsskd.style.width = 'calc(100% / 19.55)';
      for (var c = 0; c < cbsswz.length; c++) {
        cbsswz[c].style.display = 'none';
      }
      cbjava.style.transform = 'scale(0.5,0.5) translate(-3px,-26.7px)';
      cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo33.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';

    }
  }

  if (yansebj[3].classList.contains('xz')) {
    if (cbsskd.classList.contains('ax')) {
      cbsskd.style.width = 'calc(100% / 6.55)';
      for (var i = 0; i < cbsswz.length; i++) {
        cbsswz[i].style.display = 'block';
      }
      cbjava.style.transform = 'scale(0.5,0.5) translate(-1px,-26.7px)';
      cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo4.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.9,0.85);';
      cbsskd.classList.remove('ax');
    } else {
      cbsskd.classList.add('ax');
      cbsskd.style.width = 'calc(100% / 19.55)';
      for (var c = 0; c < cbsswz.length; c++) {
        cbsswz[c].style.display = 'none';
      }
      cbjava.style.transform = 'scale(0.5,0.5) translate(-3px,-26.7px)';
      cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo44.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';

    }
  }
})


//联系我们弹窗的隐藏显示

var guanbi2 = document.getElementById('guanbi2');
var guanbit2 = document.getElementById('guanbit2');
var lianxi = document.getElementById('lianxi');

dhbz[3].addEventListener('click', function () {
  if (lianxi.classList.contains('nrxqtc')) {
    lianxi.classList.remove('nrxqtc');
  }
  lianxi.style.display = 'flex';
  lianxi.classList.add('nrxqtr');
  setTimeout(chuxian, 10);
  function chuxian() {
    lianxi.classList.add('nrxqtr');
  }
})


//鼠标移动到关闭按钮x变红


guanbi2.addEventListener('mouseover', function () {
  guanbit2.style.cssText = 'height: 65px; width: 65px; background: url(images/guanbihong.png) no-repeat;  background-size: cover; transform: scale(0.7,0.7); transition: all .3s ease;';
})

guanbi2.addEventListener('mouseout', function () {
  guanbit2.style.cssText = 'height: 65px; width: 65px; background: url(images/guanbihui.png) no-repeat;  background-size: cover; transform: scale(0.6,0.6); transition: all .3s ease;';
})

//添加关闭子页按钮动画以及隐藏子页

guanbi2.addEventListener('click', function () {
  lianxi.classList.add('nrxqtc');
  if (lianxi.classList.contains('nrxqtr')) {
    lianxi.classList.remove('nrxqtr');
  }
  setTimeout(xiaoshi, 150);
  function xiaoshi() {
    lianxi.style.display = 'none';
  }
})

//建议反馈弹窗的隐藏显示

var guanbi3 = document.getElementById('guanbi3');
var guanbit3 = document.getElementById('guanbit3');
var fankui = document.getElementById('fankui');
var tijiao = document.getElementById('tijiao');
var fankuiwb = document.getElementById('fankuiwb');
var fankuisr = document.getElementById('fankuisr');
var textar = document.getElementById('textar');

dhbz[4].addEventListener('click', function () {
  if (fankui.classList.contains('nrxqtc')) {
    fankui.classList.remove('nrxqtc');
  }
  fankui.style.display = 'flex';
  fankui.classList.add('nrxqtr');
  setTimeout(chuxian, 10);
  function chuxian() {
    fankui.classList.add('nrxqtr');
  }
  fankuiwb.style.display = 'none';
  fankuisr.style.display = 'flex';
})


//鼠标移动到关闭按钮x变红


guanbi3.addEventListener('mouseover', function () {
  guanbit3.style.cssText = 'height: 65px; width: 65px; background: url(images/guanbihong.png) no-repeat;  background-size: cover; transform: scale(0.7,0.7); transition: all .3s ease;';
})

guanbi3.addEventListener('mouseout', function () {
  guanbit3.style.cssText = 'height: 65px; width: 65px; background: url(images/guanbihui.png) no-repeat;  background-size: cover; transform: scale(0.6,0.6); transition: all .3s ease;';
})

//添加关闭子页按钮动画以及隐藏子页

guanbi3.addEventListener('click', function () {
  fankui.classList.add('nrxqtc');
  if (fankui.classList.contains('nrxqtr')) {
    fankui.classList.remove('nrxqtr');
  }
  setTimeout(xiaoshi, 150);
  function xiaoshi() {
    fankui.style.display = 'none';
  }
})

//反馈详情页点击提交按钮显示感谢反馈

tijiao.addEventListener('click', function () {

  fankuisr.style.display = 'none';
  fankuiwb.style.display = 'flex';
  textar.value = '';
})

//导航颜色主题弹窗隐藏显示
var guanbi4 = document.getElementById('guanbi4');
var guanbit4 = document.getElementById('guanbit4');
var yanse = document.getElementById('yanse');

dhbz[2].addEventListener('click', function () {
  if (yanse.classList.contains('nrxqtc')) {
    yanse.classList.remove('nrxqtc');
  }
  yanse.style.display = 'flex';
  yanse.classList.add('nrxqtr');
  setTimeout(chuxian, 10);
  function chuxian() {
    yanse.classList.add('nrxqtr');
  }
})


//鼠标移动到关闭按钮x变红


guanbi4.addEventListener('mouseover', function () {
  guanbit4.style.cssText = 'height: 65px; width: 65px; background: url(images/quedinghong.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.7,0.7); transition: all .3s ease;';
})

guanbi4.addEventListener('mouseout', function () {
  guanbit4.style.cssText = 'height: 65px; width: 65px; background: url(images/quedinghui.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.6,0.6); transition: all .3s ease;';
})

//添加关闭子页按钮动画以及隐藏子页

guanbi4.addEventListener('click', function () {
  yanse.classList.add('nrxqtc');
  if (yanse.classList.contains('nrxqtr')) {
    yanse.classList.remove('nrxqtr');
  }
  setTimeout(xiaoshi, 150);
  function xiaoshi() {
    yanse.style.display = 'none';
  }
})

//鼠标滑动哪个颜色就把主题换成哪个颜色
var yansebj = document.getElementsByClassName('yansebj');

yansebj[0].addEventListener('mouseover', function () {

})
