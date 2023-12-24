// 给模块栏添加按下新拟态动画

var mklz = document.getElementsByClassName('mklz');
mklz[0].addEventListener('click', function () {
  mklz[0].classList.add('h');
  if (mklz[1].classList.contains('h')) {
    mklz[1].classList.remove('h');
  }
  if (mklz[2].classList.contains('h')) {
    mklz[2].classList.remove('h');
  }
})

mklz[1].addEventListener('click', function () {
  mklz[1].classList.add('h');
  if (mklz[0].classList.contains('h')) {
    mklz[0].classList.remove('h');
  }
  if (mklz[2].classList.contains('h')) {
    mklz[2].classList.remove('h');
  }
})

mklz[2].addEventListener('click', function () {
  mklz[2].classList.add('h');
  if (mklz[0].classList.contains('h')) {
    mklz[0].classList.remove('h');
  }
  if (mklz[1].classList.contains('h')) {
    mklz[1].classList.remove('h');
  }
})

//  模块图片添加点击后缩小动画

var mklzz = document.getElementsByClassName('mklzz');

mklz[0].addEventListener('click', function () {
  mklzz[0].classList.add('hz');
  if (mklzz[1].classList.contains('hz')) {
    mklzz[1].classList.remove('hz');
  }
  if (mklzz[2].classList.contains('hz')) {
    mklzz[2].classList.remove('hz');
  }
})

mklz[1].addEventListener('click', function () {
  mklzz[1].classList.add('hz');
  if (mklzz[0].classList.contains('hz')) {
    mklzz[0].classList.remove('hz');
  }
  if (mklzz[2].classList.contains('hz')) {
    mklzz[2].classList.remove('hz');
  }
})

mklz[2].addEventListener('click', function () {
  mklzz[2].classList.add('hz');
  if (mklzz[0].classList.contains('hz')) {
    mklzz[0].classList.remove('hz');
  }
  if (mklzz[1].classList.contains('hz')) {
    mklzz[1].classList.remove('hz');
  }
})

//  鼠标经过触发模块提示

var mktsbz = document.getElementsByClassName('mktsbz');

mklz[0].addEventListener('mouseover', function () {
  mktsbz[0].style.visibility = 'visible';
})
mklz[0].addEventListener('mouseout', function () {
  mktsbz[0].style.visibility = 'hidden';
})

mklz[1].addEventListener('mouseover', function () {
  mktsbz[1].style.visibility = 'visible';
})
mklz[1].addEventListener('mouseout', function () {
  mktsbz[1].style.visibility = 'hidden';
})

mklz[2].addEventListener('mouseover', function () {
  mktsbz[2].style.visibility = 'visible';
})
mklz[2].addEventListener('mouseout', function () {
  mktsbz[2].style.visibility = 'hidden';
})

// 点击后模块提示按下动画

mklz[0].addEventListener('click', function () {
  mktsbz[0].classList.add('hts');
  if (mktsbz[1].classList.contains('hts')) {
    mktsbz[1].classList.remove('hts');
  }
  if (mktsbz[2].classList.contains('hts')) {
    mktsbz[2].classList.remove('hts');
  }
})

mklz[1].addEventListener('click', function () {
  mktsbz[1].classList.add('hts');
  if (mktsbz[0].classList.contains('hts')) {
    mktsbz[0].classList.remove('hts');
  }
  if (mktsbz[2].classList.contains('hts')) {
    mktsbz[2].classList.remove('hts');
  }
})

mklz[2].addEventListener('click', function () {
  mktsbz[2].classList.add('hts');
  if (mktsbz[1].classList.contains('hts')) {
    mktsbz[1].classList.remove('hts');
  }
  if (mktsbz[0].classList.contains('hts')) {
    mktsbz[0].classList.remove('hts');
  }
})

//  模块提示文字添加点击后缩小动画

var mktszbz = document.getElementsByClassName('mktszbz');

mklz[0].addEventListener('click', function () {
  mktszbz[0].classList.add('htsz');
  if (mktszbz[1].classList.contains('htsz')) {
    mktszbz[1].classList.remove('htsz');
  }
  if (mktszbz[2].classList.contains('htsz')) {
    mktszbz[2].classList.remove('htsz');
  }
})

mklz[1].addEventListener('click', function () {
  mktszbz[1].classList.add('htsz');
  if (mktszbz[0].classList.contains('htsz')) {
    mktszbz[0].classList.remove('htsz');
  }
  if (mktszbz[2].classList.contains('htsz')) {
    mktszbz[2].classList.remove('htsz');
  }
})

mklz[2].addEventListener('click', function () {
  mktszbz[2].classList.add('htsz');
  if (mktszbz[0].classList.contains('htsz')) {
    mktszbz[0].classList.remove('htsz');
  }
  if (mktszbz[1].classList.contains('htsz')) {
    mktszbz[1].classList.remove('htsz');
  }
})

//  鼠标经过模块，模块箭头显示,按下的模块不变
var jtys = document.getElementsByClassName('jtys');

mklz[0].addEventListener('mouseover', function () {
  jtys[0].style.visibility = 'visible';
  jtys[1].style.visibility = 'hidden';
  jtys[2].style.visibility = 'hidden';
})
mklz[0].addEventListener('mouseout', function () {
  if (jtys[0].classList.contains('ax')) {

  } else {
    jtys[0].style.visibility = 'hidden';
  }
  if (jtys[1].classList.contains('ax')) {
    jtys[1].style.visibility = 'visible';
  }
  if (jtys[2].classList.contains('ax')) {
    jtys[2].style.visibility = 'visible';
  }
})

mklz[1].addEventListener('mouseover', function () {
  jtys[1].style.visibility = 'visible';
  jtys[0].style.visibility = 'hidden';
  jtys[2].style.visibility = 'hidden';
})
mklz[1].addEventListener('mouseout', function () {
  if (jtys[1].classList.contains('ax')) {

  } else {
    jtys[1].style.visibility = 'hidden';
  }
  if (jtys[0].classList.contains('ax')) {
    jtys[0].style.visibility = 'visible';
  }
  if (jtys[2].classList.contains('ax')) {
    jtys[2].style.visibility = 'visible';
  }
})

mklz[2].addEventListener('mouseover', function () {
  jtys[2].style.visibility = 'visible';
  jtys[1].style.visibility = 'hidden';
  jtys[0].style.visibility = 'hidden';
})
mklz[2].addEventListener('mouseout', function () {
  if (jtys[2].classList.contains('ax')) {

  } else {
    jtys[2].style.visibility = 'hidden';
  }
  if (jtys[1].classList.contains('ax')) {
    jtys[1].style.visibility = 'visible';
  }
  if (jtys[0].classList.contains('ax')) {
    jtys[0].style.visibility = 'visible';
  }
})

// 点击模块,模块箭头按下动画

mklz[0].addEventListener('click', function () {
  jtys[0].classList.add('hjt');
  if (jtys[1].classList.contains('hjt')) {
    jtys[1].classList.remove('hjt');
  }
  if (jtys[2].classList.contains('hjt')) {
    jtys[2].classList.remove('hjt');
  }
})

mklz[1].addEventListener('click', function () {
  jtys[1].classList.add('hjt');
  if (jtys[0].classList.contains('hjt')) {
    jtys[0].classList.remove('hjt');
  }
  if (jtys[2].classList.contains('hjt')) {
    jtys[2].classList.remove('hjt');
  }
})

mklz[2].addEventListener('click', function () {
  jtys[2].classList.add('hjt');
  if (jtys[1].classList.contains('hjt')) {
    jtys[1].classList.remove('hjt');
  }
  if (jtys[0].classList.contains('hjt')) {
    jtys[0].classList.remove('hjt');
  }
})

//点击模块，模块指示箭头显示，其余隐藏
var mkjtbz = document.getElementsByClassName('mkjtbz');

mklz[0].addEventListener('click', function () {
  jtys[0].style.visibility = 'visible';
  jtys[1].style.visibility = 'hidden';
  jtys[2].style.visibility = 'hidden';
  jtys[0].classList.add('ax');
  if (jtys[1].classList.contains('ax')) {
    jtys[1].classList.remove('ax');
  }
  if (jtys[2].classList.contains('ax')) {
    jtys[2].classList.remove('ax');
  }
})

mklz[1].addEventListener('click', function () {
  jtys[1].style.visibility = 'visible';
  jtys[0].style.visibility = 'hidden';
  jtys[2].style.visibility = 'hidden';
  jtys[1].classList.add('ax');
  if (jtys[0].classList.contains('ax')) {
    jtys[0].classList.remove('ax');
  }
  if (jtys[2].classList.contains('ax')) {
    jtys[2].classList.remove('ax');
  }
})

mklz[2].addEventListener('click', function () {
  jtys[2].style.visibility = 'visible';
  jtys[1].style.visibility = 'hidden';
  jtys[0].style.visibility = 'hidden';
  jtys[2].classList.add('ax');
  if (jtys[1].classList.contains('ax')) {
    jtys[1].classList.remove('ax');
  }
  if (jtys[0].classList.contains('ax')) {
    jtys[0].classList.remove('ax');
  }
})

//  鼠标经过模块，模块内容显示,按下的模块不变

mklz[0].addEventListener('mouseover', function () {
  nrbz[0].style.display = 'flex';
  nrbz[1].style.display = 'none';
  nrbz[2].style.display = 'none';
})
mklz[0].addEventListener('mouseout', function () {
  if (nrbz[0].classList.contains('ax')) {

  } else {
    nrbz[0].style.display = 'none';
  }
  if (nrbz[1].classList.contains('ax')) {
    nrbz[1].style.display = 'flex';
  }
  if (nrbz[2].classList.contains('ax')) {
    nrbz[2].style.display = 'flex';
  }
})

mklz[1].addEventListener('mouseover', function () {
  nrbz[1].style.display = 'flex';
  nrbz[0].style.display = 'none';
  nrbz[2].style.display = 'none';
})
mklz[1].addEventListener('mouseout', function () {
  if (nrbz[1].classList.contains('ax')) {

  } else {
    nrbz[1].style.display = 'none';
  }
  if (nrbz[0].classList.contains('ax')) {
    nrbz[0].style.display = 'flex';
  }
  if (nrbz[2].classList.contains('ax')) {
    nrbz[2].style.display = 'flex';
  }
})

mklz[2].addEventListener('mouseover', function () {
  nrbz[2].style.display = 'flex';
  nrbz[1].style.display = 'none';
  nrbz[0].style.display = 'none';
})
mklz[2].addEventListener('mouseout', function () {
  if (nrbz[2].classList.contains('ax')) {

  } else {
    nrbz[2].style.display = 'none';
  }
  if (nrbz[1].classList.contains('ax')) {
    nrbz[1].style.display = 'flex';
  }
  if (nrbz[0].classList.contains('ax')) {
    nrbz[0].style.display = 'flex';
  }
})


// 点击模块，模块内容按下动画

mklz[0].addEventListener('click', function () {
  nrbz[0].classList.add('hnr');
  if (nrbz[1].classList.contains('hnr')) {
    nrbz[1].classList.remove('hnr');
  }
  if (nrbz[2].classList.contains('hnr')) {
    nrbz[2].classList.remove('hnr');
  }
})

mklz[1].addEventListener('click', function () {
  nrbz[1].classList.add('hnr');
  if (nrbz[0].classList.contains('hnr')) {
    nrbz[0].classList.remove('hnr');
  }
  if (nrbz[2].classList.contains('hnr')) {
    nrbz[2].classList.remove('hnr');
  }
})

mklz[2].addEventListener('click', function () {
  nrbz[2].classList.add('hnr');
  if (nrbz[1].classList.contains('hnr')) {
    nrbz[1].classList.remove('hnr');
  }
  if (nrbz[0].classList.contains('hnr')) {
    nrbz[0].classList.remove('hnr');
  }
})

//  点击模块显示内容

var nrbz = document.getElementsByClassName('nrbz');

mklz[0].addEventListener('click', function () {
  nrbz[0].style.display = 'flex';
  nrbz[1].style.display = 'none';
  nrbz[2].style.display = 'none';
  mklz[0].classList.add('ax');
  if (mklz[1].classList.contains('ax')) {
    mklz[1].classList.remove('ax');
  } else if (mklz[2].classList.contains('ax')) {
    mklz[2].classList.remove('ax');
  }
  nrbz[0].classList.add('ax');
  if (nrbz[1].classList.contains('ax')) {
    nrbz[1].classList.remove('ax');
  }
  if (nrbz[2].classList.contains('ax')) {
    nrbz[2].classList.remove('ax');
  }
})

mklz[1].addEventListener('click', function () {
  nrbz[1].style.display = 'flex';
  nrbz[0].style.display = 'none';
  nrbz[2].style.display = 'none';
  mklz[1].classList.add('ax');
  if (mklz[0].classList.contains('ax')) {
    mklz[0].classList.remove('ax');
  } else if (mklz[2].classList.contains('ax')) {
    mklz[2].classList.remove('ax');
  }
  nrbz[1].classList.add('ax');
  if (nrbz[0].classList.contains('ax')) {
    nrbz[0].classList.remove('ax');
  }
  if (nrbz[2].classList.contains('ax')) {
    nrbz[2].classList.remove('ax');
  }
})

mklz[2].addEventListener('click', function () {
  nrbz[2].style.display = 'flex';
  nrbz[1].style.display = 'none';
  nrbz[0].style.display = 'none';
  mklz[2].classList.add('ax');
  if (mklz[1].classList.contains('ax')) {
    mklz[1].classList.remove('ax');
  } else if (mklz[0].classList.contains('ax')) {
    mklz[0].classList.remove('ax');
  }
  nrbz[2].classList.add('ax');
  if (nrbz[1].classList.contains('ax')) {
    nrbz[1].classList.remove('ax');
  }
  if (nrbz[0].classList.contains('ax')) {
    nrbz[0].classList.remove('ax');
  }
})

//按下模块，模块内容里面的具体元素添加悬浮样式
var nrz = document.getElementsByClassName('nrz');

mklz[0].addEventListener('click', function () {
  for (var i = 0; i < 9; i++) {
    nrz[i].classList.add('qnrz');
  }
})

mklz[1].addEventListener('click', function () {
  for (var i = 9; i < 18; i++) {
    nrz[i].classList.add('qnrz');
  }
})

mklz[2].addEventListener('click', function () {
  for (var i = 18; i < 27; i++) {
    nrz[i].classList.add('qnrz');
  }
})

//鼠标经过模块，模块内容里面的具体元素恢复在正常的状态，已按下的不变

mklz[0].addEventListener('mouseover', function () {
  if (mklz[0].classList.contains('ax')) {

  } else {
    if (nrz[0].classList.contains('qnrz')) {
      for (var i = 0; i < 9; i++) {
        nrz[i].classList.remove('qnrz');
      }
    }
  }
})

mklz[1].addEventListener('mouseover', function () {
  if (mklz[1].classList.contains('ax')) {

  } else {
    if (nrz[9].classList.contains('qnrz')) {
      for (var i = 9; i < 18; i++) {
        nrz[i].classList.remove('qnrz');
      }
    }
  }
})

mklz[2].addEventListener('mouseover', function () {
  if (mklz[2].classList.contains('ax')) {

  } else {
    if (nrz[18].classList.contains('qnrz')) {
      for (var i = 18; i < 27; i++) {
        nrz[i].classList.remove('qnrz');
      }
    }
  }
})