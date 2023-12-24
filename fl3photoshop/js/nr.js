var nrz = document.getElementsByClassName('nrz');
var nrxq = document.querySelector('#nrxq');
var nrxqf = document.querySelector('#nrxqf');

//鼠标滑过27个子页的图片文字缩小，文字变红
var nrztz = document.getElementsByClassName('nrztz');
var nrzz2 = document.getElementsByClassName('nrzz2');
var fgx = document.getElementsByClassName('fgx');
for (var i = 0; i < nrz.length; i++) {
  nrz[i].setAttribute('index2', i);
  nrz[i].addEventListener('mouseover', function () {
    var index2 = this.getAttribute('index2');
    nrztz[index2].style.width = '55%';
    nrztz[index2].style.height = '80%';
    nrzz2[index2].style.transform = 'scale(0.95,0.95)';
    fgx[index2].style.transform = 'scale(0.95,0.95)';

  })
  nrz[i].addEventListener('mouseout', function () {
    var index2 = this.getAttribute('index2');
    nrztz[index2].style.width = '60%';
    nrztz[index2].style.height = '85%';
    nrzz2[index2].style.transform = 'scale(1,1)';
    fgx[index2].style.transform = 'scale(1,1)';
  })

}

//鼠标移动到关闭按钮x变红

var guanbi1 = document.getElementById('guanbi1');
var guanbit1 = document.getElementById('guanbit1');

guanbi1.addEventListener('mouseover', function () {
  guanbit1.style.cssText = 'height: 65px; width: 65px; background: url(images/guanbihong.png) no-repeat;  background-size: cover; transform: scale(0.7,0.7); transition: all .3s ease;';
})

guanbi1.addEventListener('mouseout', function () {
  guanbit1.style.cssText = 'height: 65px; width: 65px; background: url(images/guanbihui.png) no-repeat;  background-size: cover; transform: scale(0.6,0.6); transition: all .3s ease;';
})

//添加关闭子页按钮动画以及隐藏子页

guanbi1.addEventListener('click', function () {
  nrxqf.classList.add('nrxqtc');
  if (nrxqf.classList.contains('nrxqtr')) {
    nrxqf.classList.remove('nrxqtr');
  }
  setTimeout(xiaoshi, 150);
  function xiaoshi() {
    nrxqf.style.display = 'none';
  }
})



