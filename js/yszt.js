var yansebj = document.getElementsByClassName('yansebj');
var yanse0 = document.getElementById('yanse0');
var body = document.getElementById('body');
var logolan = document.getElementById('logolan');
var daohang = document.getElementById('daohang');
var mktsbz = document.getElementsByClassName('mktsbz');
var mklysff = document.getElementsByClassName('mklysff');
var mklysf = document.getElementsByClassName('mklysf');
var jtys = document.getElementsByClassName('jtys');
var nrbz = document.getElementsByClassName('nrbz');
var ylbq = document.getElementById('ylbq');
var dhggx = document.getElementById('dhggx');
var guanbiz = document.getElementsByClassName('guanbiz');
var tanchuan = document.getElementsByClassName('tanchuan');
var cbsslogo = document.getElementById('cbsslogo');
var ggnrwz = document.getElementById('ggnrwz');
var sytb = document.getElementById('sytb');
var bjshan = document.getElementById('bjshan');
var bjxiong = document.getElementById('bjxiong');
var ylbq = document.getElementById('ylbq');
var yqbj = document.getElementsByClassName('yqbj');
var cbsstb = document.getElementById('cbsstb');
var nrxq = document.getElementById('nrxq');
var dhbz = document.getElementsByClassName('dhbz');
var cbsskd = document.getElementById('cbsskd');
var dhbz = document.getElementsByClassName('dhbz');
var cbsskd = document.getElementById('cbsskd');
var cbsswz = document.getElementsByClassName('cbsswz');
var cbjava = document.getElementById('cbjava');
var cbsslogo = document.getElementById('cbsslogo');
var cbys = document.getElementsByClassName('cbys');

//获取路径的颜色片段标识，设置主题颜色

var message66 = window.location.hash;
var jl = message66.split('+');

if (jl[1] == '0') {
  yansebj[0].classList.add('xz');
} else if (jl[1] == '1') {
  yansebj[1].classList.add('xz');
} else if (jl[1] == '2') {
  yansebj[2].classList.add('xz');
} else if (jl[1] == '3') {
  yansebj[3].classList.add('xz');
}

if (jl[2] == '0') {
  if (cbsskd.classList.contains('ax')) {
    cbsskd.classList.remove('ax');
  }
} else if (jl[2] == '1') {
  if (cbsskd.classList.contains('ax')) {
    console.log('cbss');
  } else {
    cbsskd.classList.add('ax');
  }
}


if (cbsskd.classList.contains('ax')) {

  if (yansebj[0].classList.contains('xz')) {
    cbsskd.style.width = 'calc(100% / 19.55)';
    for (var c = 0; c < cbsswz.length; c++) {
      cbsswz[c].style.display = 'none';
    }
    cbjava.style.transform = 'scale(0.5,0.5) translate(-3px,-26.7px)';
    cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';
  }

  if (yansebj[1].classList.contains('xz')) {
    cbsskd.style.width = 'calc(100% / 19.55)';
    for (var c = 0; c < cbsswz.length; c++) {
      cbsswz[c].style.display = 'none';
    }
    cbjava.style.transform = 'scale(0.5,0.5) translate(-3px,-26.7px)';
    cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo22.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';

  }

  if (yansebj[2].classList.contains('xz')) {
    cbsskd.style.width = 'calc(100% / 19.55)';
    for (var c = 0; c < cbsswz.length; c++) {
      cbsswz[c].style.display = 'none';
    }
    cbjava.style.transform = 'scale(0.5,0.5) translate(-3px,-26.7px)';
    cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo33.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';

  }

  if (yansebj[3].classList.contains('xz')) {
    cbsskd.style.width = 'calc(100% / 19.55)';
    for (var c = 0; c < cbsswz.length; c++) {
      cbsswz[c].style.display = 'none';
    }
    cbjava.style.transform = 'scale(0.5,0.5) translate(-3px,-26.7px)';
    cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo44.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';

  }
}



//  点击侧边分类添加选中标记,并打开窗口,传递选择的颜色片段标识

cbys[0].addEventListener('click', function () {
  if (cbys[0].classList.contains('ax')) {
    if (yansebj[0].classList.contains('xz')) {
      if (cbsskd.classList.contains('ax')) {
        window.open('index.html#+0+1');
      } else {
        window.open('index.html#+0+0');
      }

    }

    if (yansebj[1].classList.contains('xz')) {
      if (cbsskd.classList.contains('ax')) {
        window.open('index.html#+1+1');
      } else {
        window.open('index.html#+1+0');
      }
    }

    if (yansebj[2].classList.contains('xz')) {
      if (cbsskd.classList.contains('ax')) {
        window.open('index.html#+2+1');
      } else {
        window.open('index.html#+2+0');
      }
    }

    if (yansebj[3].classList.contains('xz')) {
      if (cbsskd.classList.contains('ax')) {
        window.open('index.html#+3+1');
      } else {
        window.open('index.html#+3+0');
      }
    }
  } else {

    if (yansebj[0].classList.contains('xz')) {
      if (cbsskd.classList.contains('ax')) {
        window.open('../index.html#+0+1');
      } else {
        window.open('../index.html#+0+0');
      }
    }

    if (yansebj[1].classList.contains('xz')) {
      if (cbsskd.classList.contains('ax')) {
        window.open('../index.html#+1+1');
      } else {
        window.open('../index.html#+1+0');
      }
    }

    if (yansebj[2].classList.contains('xz')) {
      if (cbsskd.classList.contains('ax')) {
        window.open('../index.html#+2+1');
      } else {
        window.open('../index.html#+2+0');
      }
    }

    if (yansebj[3].classList.contains('xz')) {
      if (cbsskd.classList.contains('ax')) {
        window.open('../index.html#+3+1');
      } else {
        window.open('../index.html#+3+0');
      }
    }

  }
})

cbys[1].addEventListener('click', function () {
  if (cbys[1].classList.contains('ax')) {
    location.reload();
  } else {
    if (cbys[0].classList.contains('ax')) {

      if (yansebj[0].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl1html/index.html#+0+1');
        } else {
          window.open('fl1html/index.html#+0+0');
        }
      }

      if (yansebj[1].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl1html/index.html#+1+1');
        } else {
          window.open('fl1html/index.html#+1+0');
        }
      }

      if (yansebj[2].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl1html/index.html#+2+1');
        } else {
          window.open('fl1html/index.html#+2+0');
        }
      }

      if (yansebj[3].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl1html/index.html#+3+1');
        } else {
          window.open('fl1html/index.html#+3+0');
        }
      }
    } else {

      if (yansebj[0].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl1html/index.html#+0+1');
        } else {
          window.open('../fl1html/index.html#+0+0');
        }
      }

      if (yansebj[1].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl1html/index.html#+1+1');
        } else {
          window.open('../fl1html/index.html#+1+0');
        }
      }

      if (yansebj[2].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl1html/index.html#+2+1');
        } else {
          window.open('../fl1html/index.html#+2+0');
        }
      }

      if (yansebj[3].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl1html/index.html#+3+1');
        } else {
          window.open('../fl1html/index.html#+3+0');
        }
      }
    }
  }
}
)

cbys[2].addEventListener('click', function () {
  if (cbys[2].classList.contains('ax')) {
    location.reload();
  } else {
    if (cbys[0].classList.contains('ax')) {

      if (yansebj[0].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl2css/index.html#+0+1');
        } else {
          window.open('fl2css/index.html#+0+0');
        }
      }

      if (yansebj[1].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl2css/index.html#+1+1');
        } else {
          window.open('fl2css/index.html#+1+0');
        }
      }

      if (yansebj[2].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl2css/index.html#+2+1');
        } else {
          window.open('fl2css/index.html#+2+0');
        }
      }

      if (yansebj[3].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl2css/index.html#+3+1');
        } else {
          window.open('fl2css/index.html#+3+0');
        }
      }
    } else {

      if (yansebj[0].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl2css/index.html#+0+1');
        } else {
          window.open('../fl2css/index.html#+0+0');
        }
      }

      if (yansebj[1].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl2css/index.html#+1+1');
        } else {
          window.open('../fl2css/index.html#+1+0');
        }
      }

      if (yansebj[2].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl2css/index.html#+2+1');
        } else {
          window.open('../fl2css/index.html#+2+0');
        }
      }

      if (yansebj[3].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl2css/index.html#+3+1');
        } else {
          window.open('../fl2css/index.html#+3+0');
        }
      }
    }
  }
}
)

cbys[3].addEventListener('click', function () {
  if (cbys[3].classList.contains('ax')) {
    location.reload();
  } else {
    if (cbys[0].classList.contains('ax')) {

      if (yansebj[0].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl3photoshop/index.html#+0+1');
        } else {
          window.open('fl3photoshop/index.html#+0+0');
        }
      }

      if (yansebj[1].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl3photoshop/index.html#+1+1');
        } else {
          window.open('fl3photoshop/index.html#+1+0');
        }
      }

      if (yansebj[2].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl3photoshop/index.html#+2+1');
        } else {
          window.open('fl3photoshop/index.html#+2+0');
        }
      }

      if (yansebj[3].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl3photoshop/index.html#+3+1');
        } else {
          window.open('fl3photoshop/index.html#+3+0');
        }
      }
    } else {

      if (yansebj[0].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl3photoshop/index.html#+0+1');
        } else {
          window.open('../fl3photoshop/index.html#+0+0');
        }
      }

      if (yansebj[1].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl3photoshop/index.html#+1+1');
        } else {
          window.open('../fl3photoshop/index.html#+1+0');
        }
      }

      if (yansebj[2].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl3photoshop/index.html#+2+1');
        } else {
          window.open('../fl3photoshop/index.html#+2+0');
        }
      }

      if (yansebj[3].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl3photoshop/index.html#+3+1');
        } else {
          window.open('../fl3photoshop/index.html#+3+0');
        }
      }
    }
  }
}
)

cbys[4].addEventListener('click', function () {
  if (cbys[4].classList.contains('ax')) {
    location.reload();
  } else {
    if (cbys[0].classList.contains('ax')) {

      if (yansebj[0].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl4jsjcz/index.html#+0+1');
        } else {
          window.open('fl4jsjcz/index.html#+0+0');
        }
      }

      if (yansebj[1].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl4jsjcz/index.html#+1+1');
        } else {
          window.open('fl4jsjcz/index.html#+1+0');
        }
      }

      if (yansebj[2].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl4jsjcz/index.html#+2+1');
        } else {
          window.open('fl4jsjcz/index.html#+2+0');
        }
      }

      if (yansebj[3].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('fl4jsjcz/index.html#+3+1');
        } else {
          window.open('fl4jsjcz/index.html#+3+0');
        }
      }
    } else {

      if (yansebj[0].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl4jsjcz/index.html#+0+1');
        } else {
          window.open('../fl4jsjcz/index.html#+0+0');
        }
      }

      if (yansebj[1].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl4jsjcz/index.html#+1+1');
        } else {
          window.open('../fl4jsjcz/index.html#+1+0');
        }
      }

      if (yansebj[2].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl4jsjcz/index.html#+2+1');
        } else {
          window.open('../fl4jsjcz/index.html#+2+0');
        }
      }

      if (yansebj[3].classList.contains('xz')) {
        if (cbsskd.classList.contains('ax')) {
          window.open('../fl4jsjcz/index.html#+3+1');
        } else {
          window.open('../fl4jsjcz/index.html#+3+0');
        }
      }
    }
  }
}
)



//设置默认主题
if (yansebj[0].classList.contains('xz')) {
  if (yansebj[1].classList.contains('xz')) {
    yansebj[1].classList.remove('xz');
    removecbxt2();
  }
  if (yansebj[2].classList.contains('xz')) {
    yansebj[2].classList.remove('xz');
    removecbxt3();
  }
  if (yansebj[3].classList.contains('xz')) {
    yansebj[3].classList.remove('xz');
    removecbxt4();
  }

  body.style.backgroundColor = '#F0F5F9';
  logolan.style.backgroundColor = '#E6EEF0';
  for (var i = 0; i < mktsbz.length; i++) {
    mktsbz[i].style.backgroundColor = '#F0F5F9';
  }
  for (var i = 0; i < mklysff.length; i++) {
    mklysff[i].style.backgroundColor = '#F0F5F9';
  }
  for (var i = 0; i < mklysf.length; i++) {
    mklysf[i].style.backgroundColor = '#F0F5F9';
  }
  for (var i = 0; i < jtys.length; i++) {
    jtys[i].style.backgroundColor = '#F0F5F9';
  }
  for (var i = 0; i < nrbz.length; i++) {
    nrbz[i].style.backgroundColor = '#F0F5F9';
  }
  ylbq.style.background = 'linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%)';
  for (var i = 0; i < tanchuan.length; i++) {
    tanchuan[i].style.background = 'linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%)';
    tanchuan[i].style.color = 'white';
  }
  for (var i = 0; i < guanbiz.length; i++) {
    guanbiz[i].style.background = 'linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%)';
  }
  dhggx.style.cssText = 'z-index: 3; width: 100%; height: 295px; background: linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%); flex: 0 0 auto; display: flex; flex-direction: column;';

  if (cbsskd.classList.contains('ax')) {
    cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';
  } else {
    cbsslogo.style.cssText = ' height: 95%; width: 60%; background: url(images/logo1.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.9,0.85); ';
  }


  ggnrwz.style.color = '#f0f5f9';

  sytb.style.cssText = 'width: 40px;  height: 25px; background: url(images/syzt1.png) 50% 40% no-repeat; background-size: cover;';

  bjshan.style.cssText = 'display: flex; justify-content: center; align-items: center; margin-top: auto; width: 1900px; height: 121px; background: url(images/bg1.png) no-repeat,url(images/bg2.png) no-repeat; animation: gd 100s linear infinite;t';

  bjxiong.style.cssText = 'transform: scale(0.5,0.5) translate(-500px,0); background-position:fixed;width: 200px;height: 100px;background: url(images/bear.png) no-repeat;animation: bear .4s steps(8) infinite, move 3s forwards;';

  ylbq.style.color = 'white';

  daohang.style.color = 'white';

  cbsstb.style.cssText = 'cursor: pointer; width: 30px; height: 30px; background: url(images/fl.png) no-repeat; background-size: cover; margin-left: 30px;';

  for (var i = 0; i < yqbj.length; i++) {
    yqbj[i].classList.add('hyq');
  }

  cbxt1();

  window.onmessage = function (a) {                         //判断发来的消息是否正确，正确发送数据
    if (a.data == 'over') {
      nrxq.contentWindow.postMessage("background: linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%);+white", "*");
    }
  }
}

else if (yansebj[1].classList.contains('xz')) {
  if (yansebj[0].classList.contains('xz')) {
    yansebj[0].classList.remove('xz');
    removecbxt1();
  }
  if (yansebj[2].classList.contains('xz')) {
    yansebj[2].classList.remove('xz');
    removecbxt3();
  }
  if (yansebj[3].classList.contains('xz')) {
    yansebj[3].classList.remove('xz');
    removecbxt4();
  }

  body.style.background = ' linear-gradient(45deg, #FFFFFF 0%,#E0E0E0 100%)';
  logolan.style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  for (var i = 0; i < mktsbz.length; i++) {
    mktsbz[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < mklysff.length; i++) {
    mklysff[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < mklysf.length; i++) {
    mklysf[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < jtys.length; i++) {
    jtys[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < nrbz.length; i++) {
    nrbz[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  ylbq.style.background = 'linear-gradient(90deg, #006FBE 0%,#004D85 100%)';
  for (var i = 0; i < tanchuan.length; i++) {
    tanchuan[i].style.background = 'linear-gradient(90deg, #006FBE 0%,#004D85 100%)';
    tanchuan[i].style.color = 'white';
  }
  for (var i = 0; i < guanbiz.length; i++) {
    guanbiz[i].style.background = 'linear-gradient(90deg, #006FBE 0%,#004D85 100%)';
  }
  dhggx.style.cssText = 'z-index: 3; width: 100%; height: 295px; background: linear-gradient(90deg, #006FBE 0%,#004D85 100%); flex: 0 0 auto; display: flex; flex-direction: column;';

  if (cbsskd.classList.contains('ax')) {
    cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo22.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';
  } else {
    cbsslogo.style.cssText = ' height: 95%; width: 60%; background: url(images/logo2.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.9,0.85); ';
  }

  ggnrwz.style.color = '#f0f5f9';

  sytb.style.cssText = 'width: 40px;  height: 25px; background: url(images/syzt1.png) 50% 40% no-repeat; background-size: cover;';

  bjshan.style.cssText = 'display: flex; justify-content: center; align-items: center; margin-top: auto; width: 1900px; height: 121px; background: url(images/bg1.png) no-repeat,url(images/bg21.png) no-repeat; animation: gd 100s linear infinite;t';

  bjxiong.style.cssText = 'transform: scale(0.5,0.5) translate(-500px,0); background-position:fixed;width: 200px;height: 100px;background: url(images/bear2.png) no-repeat;animation: bear .4s steps(8) infinite, move 3s forwards;';

  ylbq.style.color = 'white';

  daohang.style.color = 'white';

  cbsstb.style.cssText = 'cursor: pointer; width: 30px; height: 30px; background: url(images/fl.png) no-repeat; background-size: cover; margin-left: 30px;';

  for (var i = 0; i < yqbj.length; i++) {
    yqbj[i].classList.add('hyq');
  }

  cbxt2();
  window.onmessage = function (a) {                            //判断发来的消息是否正确，正确发送数据
    if (a.data == 'over') {
      nrxq.contentWindow.postMessage("background: linear-gradient(90deg, #006FBE 0%,#004D85 100%);+white", "*");
    }
  }
}

else if (yansebj[2].classList.contains('xz')) {
  if (yansebj[0].classList.contains('xz')) {
    yansebj[0].classList.remove('xz');
    removecbxt1();
  }
  if (yansebj[1].classList.contains('xz')) {
    yansebj[1].classList.remove('xz');
    removecbxt2();
  }
  if (yansebj[3].classList.contains('xz')) {
    yansebj[3].classList.remove('xz');
    removecbxt4();
  }

  body.style.background = ' linear-gradient(45deg, #FFFFFF 0%,#E0E0E0 100%)';
  logolan.style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  for (var i = 0; i < mktsbz.length; i++) {
    mktsbz[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < mklysff.length; i++) {
    mklysff[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < mklysf.length; i++) {
    mklysf[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < jtys.length; i++) {
    jtys[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < nrbz.length; i++) {
    nrbz[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  ylbq.style.background = 'linear-gradient(90deg, #658864 0%,#B5B588 100%)';
  for (var i = 0; i < tanchuan.length; i++) {
    tanchuan[i].style.background = ' linear-gradient(90deg, #658864 0%,#B5B588 100%)';
    tanchuan[i].style.color = 'white';
  }
  for (var i = 0; i < guanbiz.length; i++) {
    guanbiz[i].style.background = 'linear-gradient(90deg, #658864 0%,#B5B588 100%)';
  }
  dhggx.style.cssText = 'z-index: 3; width: 100%; height: 295px; background: linear-gradient(90deg, #658864 0%,#B5B588 100%); flex: 0 0 auto; display: flex; flex-direction: column;';

  if (cbsskd.classList.contains('ax')) {
    cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo33.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';
  } else {
    cbsslogo.style.cssText = ' height: 95%; width: 60%; background: url(images/logo3.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.9,0.85); ';
  }

  ggnrwz.style.color = '#f0f5f9';

  sytb.style.cssText = 'width: 40px;  height: 25px; background: url(images/syzt1.png) 50% 40% no-repeat; background-size: cover;';

  bjshan.style.cssText = 'display: flex; justify-content: center; align-items: center; margin-top: auto; width: 1900px; height: 121px; background: url(images/bg1.png) no-repeat,url(images/bg22.png) no-repeat; animation: gd 100s linear infinite;t';

  bjxiong.style.cssText = 'transform: scale(0.5,0.5) translate(-500px,0); background-position:fixed;width: 200px;height: 100px;background: url(images/bear3.png) no-repeat;animation: bear .4s steps(8) infinite, move 3s forwards;';

  ylbq.style.color = 'white';

  daohang.style.color = 'white';

  cbsstb.style.cssText = 'cursor: pointer; width: 30px; height: 30px; background: url(images/fl.png) no-repeat; background-size: cover; margin-left: 30px;';

  for (var i = 0; i < yqbj.length; i++) {
    yqbj[i].classList.add('hyq');
  }


  cbxt3();

  window.onmessage = function (a) {                            //判断发来的消息是否正确，正确发送数据
    if (a.data == 'over') {
      nrxq.contentWindow.postMessage("background: linear-gradient(90deg, #658864 0%,#B5B588 100%);+white", "*");
    }
  }
}

else if (yansebj[3].classList.contains('xz')) {
  if (yansebj[0].classList.contains('xz')) {
    yansebj[0].classList.remove('xz');
    removecbxt1();
  }
  if (yansebj[1].classList.contains('xz')) {
    yansebj[1].classList.remove('xz');
    removecbxt2();
  }
  if (yansebj[2].classList.contains('xz')) {
    yansebj[2].classList.remove('xz');
    removecbxt3();
  }

  body.style.background = '#FFFEFB';
  logolan.style.background = '#F5F4F1';
  for (var i = 0; i < mktsbz.length; i++) {
    mktsbz[i].style.background = '#F5F4F1';
  }
  for (var i = 0; i < mklysff.length; i++) {
    mklysff[i].style.background = '#F5F4F1';
  }
  for (var i = 0; i < mklysf.length; i++) {
    mklysf[i].style.background = '#F5F4F1';
  }
  for (var i = 0; i < jtys.length; i++) {
    jtys[i].style.background = '#F5F4F1';
  }
  for (var i = 0; i < nrbz.length; i++) {
    nrbz[i].style.background = '#F5F4F1';
  }
  ylbq.style.background = 'linear-gradient(90deg, #D2E8F5 0%,#B5CBD7 100%)';
  for (var i = 0; i < tanchuan.length; i++) {
    tanchuan[i].style.background = 'linear-gradient(90deg, #D2E8F5 0%,#B5CBD7 100%)';
    tanchuan[i].style.color = '#7f9eb2';
  }
  for (var i = 0; i < guanbiz.length; i++) {
    guanbiz[i].style.background = 'linear-gradient(90deg, #D2E8F5 0%,#B5CBD7 100%)';
  }
  dhggx.style.cssText = 'z-index: 3; width: 100%; height: 295px; background: linear-gradient(90deg, #D2E8F5 0%,#B5CBD7 100%); flex: 0 0 auto; display: flex; flex-direction: column;';

  if (cbsskd.classList.contains('ax')) {
    cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo44.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';
  } else {
    cbsslogo.style.cssText = ' height: 95%; width: 60%; background: url(images/logo4.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.9,0.85); ';
  }

  ggnrwz.style.color = '#7f9eb2';

  sytb.style.cssText = 'width: 40px;  height: 25px; background: url(images/syzt2.png) 50% 40% no-repeat; background-size: cover;';

  bjshan.style.cssText = 'display: flex; justify-content: center; align-items: center; margin-top: auto; width: 1900px; height: 121px; background: url(images/bg1.png) no-repeat,url(images/bg23.png) no-repeat; animation: gd 100s linear infinite;t';

  bjxiong.style.cssText = 'transform: scale(0.5,0.5) translate(-500px,0); background-position:fixed;width: 200px;height: 100px;background: url(images/bear4.png) no-repeat;animation: bear .4s steps(8) infinite, move 3s forwards;';

  ylbq.style.color = '#7f9eb2';

  daohang.style.color = '#7f9eb2';

  cbsstb.style.cssText = 'cursor: pointer; width: 30px; height: 30px; background: url(images/fl1.png) no-repeat; background-size: cover; margin-left: 30px;';

  for (var i = 0; i < yqbj.length; i++) {
    yqbj[i].classList.add('hyq');
  }


  cbxt4();

  window.onmessage = function (a) {                            //判断发来的消息是否正确，正确发送数据
    if (a.data == 'over') {
      nrxq.contentWindow.postMessage("background: linear-gradient(90deg, #D2E8F5 0%,#B5CBD7 100%);+#7f9eb2", "*");
    }
  }
}

else {
  yansebj[0].classList.add('xz');
  if (yansebj[1].classList.contains('xz')) {
    yansebj[1].classList.remove('xz');
    removecbxt2();
  }
  if (yansebj[2].classList.contains('xz')) {
    yansebj[2].classList.remove('xz');
    removecbxt3();
  }
  if (yansebj[3].classList.contains('xz')) {
    yansebj[3].classList.remove('xz');
    removecbxt4();
  }

  body.style.backgroundColor = '#F0F5F9';
  logolan.style.backgroundColor = '#E6EEF0';
  for (var i = 0; i < mktsbz.length; i++) {
    mktsbz[i].style.backgroundColor = '#F0F5F9';
  }
  for (var i = 0; i < mklysff.length; i++) {
    mklysff[i].style.backgroundColor = '#F0F5F9';
  }
  for (var i = 0; i < mklysf.length; i++) {
    mklysf[i].style.backgroundColor = '#F0F5F9';
  }
  for (var i = 0; i < jtys.length; i++) {
    jtys[i].style.backgroundColor = '#F0F5F9';
  }
  for (var i = 0; i < nrbz.length; i++) {
    nrbz[i].style.backgroundColor = '#F0F5F9';
  }
  ylbq.style.background = 'linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%)';
  for (var i = 0; i < tanchuan.length; i++) {
    tanchuan[i].style.background = 'linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%)';
    tanchuan[i].style.color = 'white';
  }
  for (var i = 0; i < guanbiz.length; i++) {
    guanbiz[i].style.background = 'linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%)';
  }
  dhggx.style.cssText = 'z-index: 3; width: 100%; height: 295px; background: linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%); flex: 0 0 auto; display: flex; flex-direction: column;';

  if (cbsskd.classList.contains('ax')) {
    cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';
  } else {
    cbsslogo.style.cssText = ' height: 95%; width: 60%; background: url(images/logo1.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.9,0.85); ';
  }

  ggnrwz.style.color = '#f0f5f9';

  sytb.style.cssText = 'width: 40px;  height: 25px; background: url(images/syzt1.png) 50% 40% no-repeat; background-size: cover;';

  bjshan.style.cssText = 'display: flex; justify-content: center; align-items: center; margin-top: auto; width: 1900px; height: 121px; background: url(images/bg1.png) no-repeat,url(images/bg2.png) no-repeat; animation: gd 100s linear infinite;t';

  bjxiong.style.cssText = 'transform: scale(0.5,0.5) translate(-500px,0); background-position:fixed;width: 200px;height: 100px;background: url(images/bear.png) no-repeat;animation: bear .4s steps(8) infinite, move 3s forwards;';

  ylbq.style.color = 'white';

  daohang.style.color = 'white';

  cbsstb.style.cssText = 'cursor: pointer; width: 30px; height: 30px; background: url(images/fl.png) no-repeat; background-size: cover; margin-left: 30px;';

  for (var i = 0; i < yqbj.length; i++) {
    yqbj[i].classList.add('hyq');
  }

  cbxt1();

  window.onmessage = function (a) {                           //判断发来的消息是否正确，正确发送数据
    if (a.data == 'over') {
      nrxq.contentWindow.postMessage("background: linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%);+white", "*");
    }
  }
}

//导航栏点击首页回到首页

dhbz[1].addEventListener('click', function () {
  if (cbys[0].classList.contains('ax')) {
    if (yansebj[0].classList.contains('xz')) {
      window.open('index.html#+0');
    }

    if (yansebj[1].classList.contains('xz')) {
      window.open('index.html#+1');
    }

    if (yansebj[2].classList.contains('xz')) {
      window.open('index.html#+2');
    }

    if (yansebj[3].classList.contains('xz')) {
      window.open('index.html#+3');
    }
  } else {

    if (yansebj[0].classList.contains('xz')) {
      window.open('../index.html#+0');
    }

    if (yansebj[1].classList.contains('xz')) {
      window.open('../index.html#+1');
    }

    if (yansebj[2].classList.contains('xz')) {
      window.open('../index.html#+2');
    }

    if (yansebj[3].classList.contains('xz')) {
      window.open('../index.html#+3');
    }

  }
})



//第一种主题颜色
yansebj[0].addEventListener('mouseover', function () {
  yansebj[0].classList.add('xz');
  if (yansebj[1].classList.contains('xz')) {
    yansebj[1].classList.remove('xz');
    removecbxt2();
  }
  if (yansebj[2].classList.contains('xz')) {
    yansebj[2].classList.remove('xz');
    removecbxt3();
  }
  if (yansebj[3].classList.contains('xz')) {
    yansebj[3].classList.remove('xz');
    removecbxt4();
  }

  body.style.backgroundColor = '#F0F5F9';
  logolan.style.backgroundColor = '#E6EEF0';
  for (var i = 0; i < mktsbz.length; i++) {
    mktsbz[i].style.backgroundColor = '#F0F5F9';
  }
  for (var i = 0; i < mklysff.length; i++) {
    mklysff[i].style.backgroundColor = '#F0F5F9';
  }
  for (var i = 0; i < mklysf.length; i++) {
    mklysf[i].style.backgroundColor = '#F0F5F9';
  }
  for (var i = 0; i < jtys.length; i++) {
    jtys[i].style.backgroundColor = '#F0F5F9';
  }
  for (var i = 0; i < nrbz.length; i++) {
    nrbz[i].style.backgroundColor = '#F0F5F9';
  }
  ylbq.style.background = 'linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%)';
  for (var i = 0; i < tanchuan.length; i++) {
    tanchuan[i].style.background = 'linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%)';
    tanchuan[i].style.color = 'white';
  }
  for (var i = 0; i < guanbiz.length; i++) {
    guanbiz[i].style.background = 'linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%)';
  }
  dhggx.style.cssText = 'z-index: 3; width: 100%; height: 295px; background: linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%); flex: 0 0 auto; display: flex; flex-direction: column;';

  if (cbsskd.classList.contains('ax')) {
    cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';
  } else {
    cbsslogo.style.cssText = ' height: 95%; width: 60%; background: url(images/logo1.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.9,0.85); ';
  }

  ggnrwz.style.color = '#f0f5f9';

  sytb.style.cssText = 'width: 40px;  height: 25px; background: url(images/syzt1.png) 50% 40% no-repeat; background-size: cover;';

  bjshan.style.cssText = 'display: flex; justify-content: center; align-items: center; margin-top: auto; width: 1900px; height: 121px; background: url(images/bg1.png) no-repeat,url(images/bg2.png) no-repeat; animation: gd 100s linear infinite;t';

  bjxiong.style.cssText = 'transform: scale(0.5,0.5) translate(-500px,0); background-position:fixed;width: 200px;height: 100px;background: url(images/bear.png) no-repeat;animation: bear .4s steps(8) infinite, move 3s forwards;';

  ylbq.style.color = 'white';

  daohang.style.color = 'white';

  cbsstb.style.cssText = 'cursor: pointer; width: 30px; height: 30px; background: url(images/fl.png) no-repeat; background-size: cover; margin-left: 30px;';

  for (var i = 0; i < yqbj.length; i++) {
    yqbj[i].classList.add('hyq');
  }

  cbxt1();

  window.onmessage = function (a) {
    if (a.data == 'over') {
      console.log(a.data);
      nrxq.contentWindow.postMessage("background: linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(13,13,13,1) 50%, rgba(0,0,0,1) 100%);+white", "*");
    }
  }
})


//第二种主题颜色
yansebj[1].addEventListener('mouseover', function () {
  yansebj[1].classList.add('xz');
  if (yansebj[0].classList.contains('xz')) {
    yansebj[0].classList.remove('xz');
    removecbxt1();
  }
  if (yansebj[2].classList.contains('xz')) {
    yansebj[2].classList.remove('xz');
    removecbxt3();
  }
  if (yansebj[3].classList.contains('xz')) {
    yansebj[3].classList.remove('xz');
    removecbxt4();
  }

  body.style.background = ' linear-gradient(45deg, #FFFFFF 0%,#E0E0E0 100%)';
  logolan.style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  for (var i = 0; i < mktsbz.length; i++) {
    mktsbz[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < mklysff.length; i++) {
    mklysff[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < mklysf.length; i++) {
    mklysf[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < jtys.length; i++) {
    jtys[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < nrbz.length; i++) {
    nrbz[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  ylbq.style.background = 'linear-gradient(90deg, #006FBE 0%,#004D85 100%)';
  for (var i = 0; i < tanchuan.length; i++) {
    tanchuan[i].style.background = 'linear-gradient(90deg, #006FBE 0%,#004D85 100%)';
    tanchuan[i].style.color = 'white';
  }
  for (var i = 0; i < guanbiz.length; i++) {
    guanbiz[i].style.background = 'linear-gradient(90deg, #006FBE 0%,#004D85 100%)';
  }
  dhggx.style.cssText = 'z-index: 3; width: 100%; height: 295px; background: linear-gradient(90deg, #006FBE 0%,#004D85 100%); flex: 0 0 auto; display: flex; flex-direction: column;';

  if (cbsskd.classList.contains('ax')) {
    cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo22.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';
  } else {
    cbsslogo.style.cssText = ' height: 95%; width: 60%; background: url(images/logo2.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.9,0.85); ';
  }

  ggnrwz.style.color = '#f0f5f9';

  sytb.style.cssText = 'width: 40px;  height: 25px; background: url(images/syzt1.png) 50% 40% no-repeat; background-size: cover;';

  bjshan.style.cssText = 'display: flex; justify-content: center; align-items: center; margin-top: auto; width: 1900px; height: 121px; background: url(images/bg1.png) no-repeat,url(images/bg21.png) no-repeat; animation: gd 100s linear infinite;t';

  bjxiong.style.cssText = 'transform: scale(0.5,0.5) translate(-500px,0); background-position:fixed;width: 200px;height: 100px;background: url(images/bear2.png) no-repeat;animation: bear .4s steps(8) infinite, move 3s forwards;';

  ylbq.style.color = 'white';

  daohang.style.color = 'white';

  cbsstb.style.cssText = 'cursor: pointer; width: 30px; height: 30px; background: url(images/fl.png) no-repeat; background-size: cover; margin-left: 30px;';

  for (var i = 0; i < yqbj.length; i++) {
    yqbj[i].classList.add('hyq');
  }

  cbxt2();
  window.onmessage = function (a) {
    if (a.data == 'over') {
      console.log(a.data);
      nrxq.contentWindow.postMessage("background: linear-gradient(90deg, #006FBE 0%,#004D85 100%);+white", "*");
    }
  }
})


//第三种颜色主题

yansebj[2].addEventListener('mouseover', function () {
  yansebj[2].classList.add('xz');
  if (yansebj[0].classList.contains('xz')) {
    yansebj[0].classList.remove('xz');
    removecbxt1();
  }
  if (yansebj[1].classList.contains('xz')) {
    yansebj[1].classList.remove('xz');
    removecbxt2();
  }
  if (yansebj[3].classList.contains('xz')) {
    yansebj[3].classList.remove('xz');
    removecbxt4();
  }

  body.style.background = ' linear-gradient(45deg, #FFFFFF 0%,#E0E0E0 100%)';
  logolan.style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  for (var i = 0; i < mktsbz.length; i++) {
    mktsbz[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < mklysff.length; i++) {
    mklysff[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < mklysf.length; i++) {
    mklysf[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < jtys.length; i++) {
    jtys[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  for (var i = 0; i < nrbz.length; i++) {
    nrbz[i].style.background = 'linear-gradient(45deg, #F6F5F5 0%,#E0E0E0 100%)';
  }
  ylbq.style.background = 'linear-gradient(90deg, #658864 0%,#B5B588 100%)';
  for (var i = 0; i < tanchuan.length; i++) {
    tanchuan[i].style.background = ' linear-gradient(90deg, #658864 0%,#B5B588 100%)';
    tanchuan[i].style.color = 'white';
  }
  for (var i = 0; i < guanbiz.length; i++) {
    guanbiz[i].style.background = 'linear-gradient(90deg, #658864 0%,#B5B588 100%)';
  }
  dhggx.style.cssText = 'z-index: 3; width: 100%; height: 295px; background: linear-gradient(90deg, #658864 0%,#B5B588 100%); flex: 0 0 auto; display: flex; flex-direction: column;';

  if (cbsskd.classList.contains('ax')) {
    cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo33.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';
  } else {
    cbsslogo.style.cssText = ' height: 95%; width: 60%; background: url(images/logo3.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.9,0.85); ';
  }

  ggnrwz.style.color = '#f0f5f9';

  sytb.style.cssText = 'width: 40px;  height: 25px; background: url(images/syzt1.png) 50% 40% no-repeat; background-size: cover;';

  bjshan.style.cssText = 'display: flex; justify-content: center; align-items: center; margin-top: auto; width: 1900px; height: 121px; background: url(images/bg1.png) no-repeat,url(images/bg22.png) no-repeat; animation: gd 100s linear infinite;t';

  bjxiong.style.cssText = 'transform: scale(0.5,0.5) translate(-500px,0); background-position:fixed;width: 200px;height: 100px;background: url(images/bear3.png) no-repeat;animation: bear .4s steps(8) infinite, move 3s forwards;';

  ylbq.style.color = 'white';

  daohang.style.color = 'white';

  cbsstb.style.cssText = 'cursor: pointer; width: 30px; height: 30px; background: url(images/fl.png) no-repeat; background-size: cover; margin-left: 30px;';

  for (var i = 0; i < yqbj.length; i++) {
    yqbj[i].classList.add('hyq');
  }


  cbxt3();

  window.onmessage = function (a) {
    if (a.data == 'over') {
      console.log(a.data);
      nrxq.contentWindow.postMessage("background: linear-gradient(90deg, #658864 0%,#B5B588 100%);+white", "*");
    }
  }
})


//第四种颜色主题

yansebj[3].addEventListener('mouseover', function () {
  yansebj[3].classList.add('xz');
  if (yansebj[0].classList.contains('xz')) {
    yansebj[0].classList.remove('xz');
    removecbxt1();
  }
  if (yansebj[1].classList.contains('xz')) {
    yansebj[1].classList.remove('xz');
    removecbxt2();
  }
  if (yansebj[2].classList.contains('xz')) {
    yansebj[2].classList.remove('xz');
    removecbxt3();
  }

  body.style.background = '#FFFEFB';
  logolan.style.background = '#F5F4F1';
  for (var i = 0; i < mktsbz.length; i++) {
    mktsbz[i].style.background = '#F5F4F1';
  }
  for (var i = 0; i < mklysff.length; i++) {
    mklysff[i].style.background = '#F5F4F1';
  }
  for (var i = 0; i < mklysf.length; i++) {
    mklysf[i].style.background = '#F5F4F1';
  }
  for (var i = 0; i < jtys.length; i++) {
    jtys[i].style.background = '#F5F4F1';
  }
  for (var i = 0; i < nrbz.length; i++) {
    nrbz[i].style.background = '#F5F4F1';
  }
  ylbq.style.background = 'linear-gradient(90deg, #D2E8F5 0%,#B5CBD7 100%)';
  for (var i = 0; i < tanchuan.length; i++) {
    tanchuan[i].style.background = 'linear-gradient(90deg, #D2E8F5 0%,#B5CBD7 100%)';
    tanchuan[i].style.color = '#7f9eb2';
  }
  for (var i = 0; i < guanbiz.length; i++) {
    guanbiz[i].style.background = 'linear-gradient(90deg, #D2E8F5 0%,#B5CBD7 100%)';
  }
  dhggx.style.cssText = 'z-index: 3; width: 100%; height: 295px; background: linear-gradient(90deg, #D2E8F5 0%,#B5CBD7 100%); flex: 0 0 auto; display: flex; flex-direction: column;';

  if (cbsskd.classList.contains('ax')) {
    cbsslogo.style.cssText = 'height: 95%; width: 60%; background: url(images/logo44.png) 50% 40% no-repeat; background-size: 100%; transform: scale(0.9,0.9);';
  } else {
    cbsslogo.style.cssText = ' height: 95%; width: 60%; background: url(images/logo4.png) 50% 40% no-repeat; background-size: contain; transform: scale(0.9,0.85); ';
  }

  ggnrwz.style.color = '#7f9eb2';

  sytb.style.cssText = 'width: 40px;  height: 25px; background: url(images/syzt2.png) 50% 40% no-repeat; background-size: cover;';

  bjshan.style.cssText = 'display: flex; justify-content: center; align-items: center; margin-top: auto; width: 1900px; height: 121px; background: url(images/bg1.png) no-repeat,url(images/bg23.png) no-repeat; animation: gd 100s linear infinite;t';

  bjxiong.style.cssText = 'transform: scale(0.5,0.5) translate(-500px,0); background-position:fixed;width: 200px;height: 100px;background: url(images/bear4.png) no-repeat;animation: bear .4s steps(8) infinite, move 3s forwards;';

  ylbq.style.color = '#7f9eb2';

  daohang.style.color = '#7f9eb2';

  cbsstb.style.cssText = 'cursor: pointer; width: 30px; height: 30px; background: url(images/fl1.png) no-repeat; background-size: cover; margin-left: 30px;';

  for (var i = 0; i < yqbj.length; i++) {
    yqbj[i].classList.add('hyq');
  }


  cbxt4();

  window.onmessage = function (a) {
    if (a.data == 'over') {
      console.log(a.data);
      nrxq.contentWindow.postMessage("background: linear-gradient(90deg, #D2E8F5 0%,#B5CBD7 100%);+#7f9eb2", "*");
    }
  }
})
