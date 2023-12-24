var cbys = document.getElementsByClassName('cbys');
//  鼠标经过侧边分类栏，分类黑色,按下的分类不变

function cbxt1() {
  for (var i = 0; i < cbys.length; i++) {
    if (cbys[i].classList.contains('ax')) {
      cbys[i].classList.add('xz');
    }
  }

  cbys[0].addEventListener('mouseover', cb101 = function () {
    cbys[0].classList.add('xz');
    if (cbys[1].classList.contains('xz')) {
      cbys[1].classList.remove('xz');
    }
    if (cbys[2].classList.contains('xz')) {
      cbys[2].classList.remove('xz');
    }
    if (cbys[3].classList.contains('xz')) {
      cbys[3].classList.remove('xz');
    }
    if (cbys[4].classList.contains('xz')) {
      cbys[4].classList.remove('xz');
    }
  })
  cbys[0].addEventListener('mouseout', cb102 = function () {
    if (cbys[0].classList.contains('ax')) {

    } else {
      cbys[0].classList.remove('xz');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz');
    }
  })

  cbys[1].addEventListener('mouseover', cb111 = function () {
    cbys[1].classList.add('xz');
    if (cbys[0].classList.contains('xz')) {
      cbys[0].classList.remove('xz');
    }
    if (cbys[2].classList.contains('xz')) {
      cbys[2].classList.remove('xz');
    }
    if (cbys[3].classList.contains('xz')) {
      cbys[3].classList.remove('xz');
    }
    if (cbys[4].classList.contains('xz')) {
      cbys[4].classList.remove('xz');
    }
  })
  cbys[1].addEventListener('mouseout', cb112 = function () {
    if (cbys[1].classList.contains('ax')) {

    } else {
      cbys[1].classList.remove('xz');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz');
    }
  })

  cbys[2].addEventListener('mouseover', cb121 = function () {
    cbys[2].classList.add('xz');
    if (cbys[1].classList.contains('xz')) {
      cbys[1].classList.remove('xz');
    }
    if (cbys[0].classList.contains('xz')) {
      cbys[0].classList.remove('xz');
    }
    if (cbys[3].classList.contains('xz')) {
      cbys[3].classList.remove('xz');
    }
    if (cbys[4].classList.contains('xz')) {
      cbys[4].classList.remove('xz');
    }
  })
  cbys[2].addEventListener('mouseout', cb122 = function () {
    if (cbys[2].classList.contains('ax')) {

    } else {
      cbys[2].classList.remove('xz');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz');
    }
  })

  cbys[3].addEventListener('mouseover', cb131 = function () {
    cbys[3].classList.add('xz');
    if (cbys[1].classList.contains('xz')) {
      cbys[1].classList.remove('xz');
    }
    if (cbys[0].classList.contains('xz')) {
      cbys[0].classList.remove('xz');
    }
    if (cbys[2].classList.contains('xz')) {
      cbys[2].classList.remove('xz');
    }
    if (cbys[4].classList.contains('xz')) {
      cbys[4].classList.remove('xz');
    }
  })
  cbys[3].addEventListener('mouseout', cb132 = function () {
    if (cbys[3].classList.contains('ax')) {

    } else {
      cbys[3].classList.remove('xz');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz');
    }
  })

  cbys[4].addEventListener('mouseover', cb141 = function () {
    cbys[4].classList.add('xz');
    if (cbys[1].classList.contains('xz')) {
      cbys[1].classList.remove('xz');
    }
    if (cbys[0].classList.contains('xz')) {
      cbys[0].classList.remove('xz');
    }
    if (cbys[3].classList.contains('xz')) {
      cbys[3].classList.remove('xz');
    }
    if (cbys[2].classList.contains('xz')) {
      cbys[2].classList.remove('xz');
    }
  })
  cbys[4].addEventListener('mouseout', cb142 = function () {
    if (cbys[4].classList.contains('ax')) {

    } else {
      cbys[4].classList.remove('xz');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz');
    }
  })

}

function removecbxt1() {

  for (var i = 0; i < cbys.length; i++) {
    if (cbys[i].classList.contains('ax')) {
      cbys[i].classList.remove('xz');
    }

  }

  cbys[0].removeEventListener('mouseover', cb101);
  cbys[0].removeEventListener('mouseout', cb102);

  cbys[1].removeEventListener('mouseover', cb111);
  cbys[1].removeEventListener('mouseout', cb112);

  cbys[2].removeEventListener('mouseover', cb121);
  cbys[2].removeEventListener('mouseout', cb122);

  cbys[3].removeEventListener('mouseover', cb131);
  cbys[3].removeEventListener('mouseout', cb132);

  cbys[4].removeEventListener('mouseover', cb141);
  cbys[4].removeEventListener('mouseout', cb142);

}


function cbxt2() {

  for (var i = 0; i < cbys.length; i++) {
    if (cbys[i].classList.contains('ax')) {
      cbys[i].classList.add('xz2');
    }
  }

  cbys[0].addEventListener('mouseover', cb201 = function () {
    cbys[0].classList.add('xz2');
    if (cbys[1].classList.contains('xz2')) {
      cbys[1].classList.remove('xz2');
    }
    if (cbys[2].classList.contains('xz2')) {
      cbys[2].classList.remove('xz2');
    }
    if (cbys[3].classList.contains('xz2')) {
      cbys[3].classList.remove('xz2');
    }
    if (cbys[4].classList.contains('xz2')) {
      cbys[4].classList.remove('xz2');
    }
  })
  cbys[0].addEventListener('mouseout', cb202 = function () {
    if (cbys[0].classList.contains('ax')) {

    } else {
      cbys[0].classList.remove('xz2');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz2');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz2');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz2');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz2');
    }
  })

  cbys[1].addEventListener('mouseover', cb211 = function () {
    cbys[1].classList.add('xz2');
    if (cbys[0].classList.contains('xz2')) {
      cbys[0].classList.remove('xz2');
    }
    if (cbys[2].classList.contains('xz2')) {
      cbys[2].classList.remove('xz2');
    }
    if (cbys[3].classList.contains('xz2')) {
      cbys[3].classList.remove('xz2');
    }
    if (cbys[4].classList.contains('xz2')) {
      cbys[4].classList.remove('xz2');
    }
  })
  cbys[1].addEventListener('mouseout', cb212 = function () {
    if (cbys[1].classList.contains('ax')) {

    } else {
      cbys[1].classList.remove('xz2');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz2');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz2');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz2');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz2');
    }
  })

  cbys[2].addEventListener('mouseover', cb221 = function () {
    cbys[2].classList.add('xz2');
    if (cbys[1].classList.contains('xz2')) {
      cbys[1].classList.remove('xz2');
    }
    if (cbys[0].classList.contains('xz2')) {
      cbys[0].classList.remove('xz2');
    }
    if (cbys[3].classList.contains('xz2')) {
      cbys[3].classList.remove('xz2');
    }
    if (cbys[4].classList.contains('xz2')) {
      cbys[4].classList.remove('xz2');
    }
  })
  cbys[2].addEventListener('mouseout', cb222 = function () {
    if (cbys[2].classList.contains('ax')) {

    } else {
      cbys[2].classList.remove('xz2');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz2');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz2');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz2');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz2');
    }
  })

  cbys[3].addEventListener('mouseover', cb231 = function () {
    cbys[3].classList.add('xz2');
    if (cbys[1].classList.contains('xz2')) {
      cbys[1].classList.remove('xz2');
    }
    if (cbys[0].classList.contains('xz2')) {
      cbys[0].classList.remove('xz2');
    }
    if (cbys[2].classList.contains('xz2')) {
      cbys[2].classList.remove('xz2');
    }
    if (cbys[4].classList.contains('xz2')) {
      cbys[4].classList.remove('xz2');
    }
  })
  cbys[3].addEventListener('mouseout', cb232 = function () {
    if (cbys[3].classList.contains('ax')) {

    } else {
      cbys[3].classList.remove('xz2');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz2');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz2');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz2');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz2');
    }
  })

  cbys[4].addEventListener('mouseover', cb241 = function () {
    cbys[4].classList.add('xz2');
    if (cbys[1].classList.contains('xz2')) {
      cbys[1].classList.remove('xz2');
    }
    if (cbys[0].classList.contains('xz2')) {
      cbys[0].classList.remove('xz2');
    }
    if (cbys[3].classList.contains('xz2')) {
      cbys[3].classList.remove('xz2');
    }
    if (cbys[2].classList.contains('xz2')) {
      cbys[2].classList.remove('xz2');
    }
  })
  cbys[4].addEventListener('mouseout', cb242 = function () {
    if (cbys[4].classList.contains('ax')) {

    } else {
      cbys[4].classList.remove('xz2');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz2');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz2');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz2');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz2');
    }
  })

}


function removecbxt2() {

  for (var i = 0; i < cbys.length; i++) {
    if (cbys[i].classList.contains('ax')) {
      cbys[i].classList.remove('xz2');
    }

  }

  cbys[0].removeEventListener('mouseover', cb201);
  cbys[0].removeEventListener('mouseout', cb202);

  cbys[1].removeEventListener('mouseover', cb211);
  cbys[1].removeEventListener('mouseout', cb212);

  cbys[2].removeEventListener('mouseover', cb221);
  cbys[2].removeEventListener('mouseout', cb222);

  cbys[3].removeEventListener('mouseover', cb231);
  cbys[3].removeEventListener('mouseout', cb232);

  cbys[4].removeEventListener('mouseover', cb241);
  cbys[4].removeEventListener('mouseout', cb242);

}



function cbxt3() {

  for (var i = 0; i < cbys.length; i++) {
    if (cbys[i].classList.contains('ax')) {
      cbys[i].classList.add('xz3');
    }
  }

  cbys[0].addEventListener('mouseover', cb301 = function () {
    cbys[0].classList.add('xz3');
    if (cbys[1].classList.contains('xz3')) {
      cbys[1].classList.remove('xz3');
    }
    if (cbys[2].classList.contains('xz3')) {
      cbys[2].classList.remove('xz3');
    }
    if (cbys[3].classList.contains('xz3')) {
      cbys[3].classList.remove('xz3');
    }
    if (cbys[4].classList.contains('xz3')) {
      cbys[4].classList.remove('xz3');
    }
  })
  cbys[0].addEventListener('mouseout', cb302 = function () {
    if (cbys[0].classList.contains('ax')) {

    } else {
      cbys[0].classList.remove('xz3');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz3');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz3');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz3');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz3');
    }
  })

  cbys[1].addEventListener('mouseover', cb311 = function () {
    cbys[1].classList.add('xz3');
    if (cbys[0].classList.contains('xz3')) {
      cbys[0].classList.remove('xz3');
    }
    if (cbys[2].classList.contains('xz3')) {
      cbys[2].classList.remove('xz3');
    }
    if (cbys[3].classList.contains('xz3')) {
      cbys[3].classList.remove('xz3');
    }
    if (cbys[4].classList.contains('xz3')) {
      cbys[4].classList.remove('xz3');
    }
  })
  cbys[1].addEventListener('mouseout', cb312 = function () {
    if (cbys[1].classList.contains('ax')) {

    } else {
      cbys[1].classList.remove('xz3');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz3');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz3');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz3');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz3');
    }
  })

  cbys[2].addEventListener('mouseover', cb321 = function () {
    cbys[2].classList.add('xz3');
    if (cbys[1].classList.contains('xz3')) {
      cbys[1].classList.remove('xz3');
    }
    if (cbys[0].classList.contains('xz3')) {
      cbys[0].classList.remove('xz3');
    }
    if (cbys[3].classList.contains('xz3')) {
      cbys[3].classList.remove('xz3');
    }
    if (cbys[4].classList.contains('xz3')) {
      cbys[4].classList.remove('xz3');
    }
  })
  cbys[2].addEventListener('mouseout', cb322 = function () {
    if (cbys[2].classList.contains('ax')) {

    } else {
      cbys[2].classList.remove('xz3');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz3');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz3');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz3');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz3');
    }
  })

  cbys[3].addEventListener('mouseover', cb331 = function () {
    cbys[3].classList.add('xz3');
    if (cbys[1].classList.contains('xz3')) {
      cbys[1].classList.remove('xz3');
    }
    if (cbys[0].classList.contains('xz3')) {
      cbys[0].classList.remove('xz3');
    }
    if (cbys[2].classList.contains('xz3')) {
      cbys[2].classList.remove('xz3');
    }
    if (cbys[4].classList.contains('xz3')) {
      cbys[4].classList.remove('xz3');
    }
  })
  cbys[3].addEventListener('mouseout', cb332 = function () {
    if (cbys[3].classList.contains('ax')) {

    } else {
      cbys[3].classList.remove('xz3');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz3');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz3');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz3');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz3');
    }
  })

  cbys[4].addEventListener('mouseover', cb341 = function () {
    cbys[4].classList.add('xz3');
    if (cbys[1].classList.contains('xz3')) {
      cbys[1].classList.remove('xz3');
    }
    if (cbys[0].classList.contains('xz3')) {
      cbys[0].classList.remove('xz3');
    }
    if (cbys[3].classList.contains('xz3')) {
      cbys[3].classList.remove('xz3');
    }
    if (cbys[2].classList.contains('xz3')) {
      cbys[2].classList.remove('xz3');
    }
  })
  cbys[4].addEventListener('mouseout', cb342 = function () {
    if (cbys[4].classList.contains('ax')) {

    } else {
      cbys[4].classList.remove('xz3');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz3');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz3');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz3');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz3');
    }
  })

}


function removecbxt3() {

  for (var i = 0; i < cbys.length; i++) {
    if (cbys[i].classList.contains('ax')) {
      cbys[i].classList.remove('xz3');
    }

  }

  cbys[0].removeEventListener('mouseover', cb301);
  cbys[0].removeEventListener('mouseout', cb302);

  cbys[1].removeEventListener('mouseover', cb311);
  cbys[1].removeEventListener('mouseout', cb312);

  cbys[2].removeEventListener('mouseover', cb321);
  cbys[2].removeEventListener('mouseout', cb322);

  cbys[3].removeEventListener('mouseover', cb331);
  cbys[3].removeEventListener('mouseout', cb332);

  cbys[4].removeEventListener('mouseover', cb341);
  cbys[4].removeEventListener('mouseout', cb342);

}



function cbxt4() {

  for (var i = 0; i < cbys.length; i++) {
    if (cbys[i].classList.contains('ax')) {
      cbys[i].classList.add('xz4');
    }
  }

  cbys[0].addEventListener('mouseover', cb401 = function () {
    cbys[0].classList.add('xz4');
    if (cbys[1].classList.contains('xz4')) {
      cbys[1].classList.remove('xz4');
    }
    if (cbys[2].classList.contains('xz4')) {
      cbys[2].classList.remove('xz4');
    }
    if (cbys[3].classList.contains('xz4')) {
      cbys[3].classList.remove('xz4');
    }
    if (cbys[4].classList.contains('xz4')) {
      cbys[4].classList.remove('xz4');
    }
  })
  cbys[0].addEventListener('mouseout', cb402 = function () {
    if (cbys[0].classList.contains('ax')) {

    } else {
      cbys[0].classList.remove('xz4');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz4');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz4');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz4');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz4');
    }
  })

  cbys[1].addEventListener('mouseover', cb411 = function () {
    cbys[1].classList.add('xz4');
    if (cbys[0].classList.contains('xz4')) {
      cbys[0].classList.remove('xz4');
    }
    if (cbys[2].classList.contains('xz4')) {
      cbys[2].classList.remove('xz4');
    }
    if (cbys[3].classList.contains('xz4')) {
      cbys[3].classList.remove('xz4');
    }
    if (cbys[4].classList.contains('xz4')) {
      cbys[4].classList.remove('xz4');
    }
  })
  cbys[1].addEventListener('mouseout', cb412 = function () {
    if (cbys[1].classList.contains('ax')) {

    } else {
      cbys[1].classList.remove('xz4');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz4');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz4');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz4');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz4');
    }
  })

  cbys[2].addEventListener('mouseover', cb421 = function () {
    cbys[2].classList.add('xz4');
    if (cbys[1].classList.contains('xz4')) {
      cbys[1].classList.remove('xz4');
    }
    if (cbys[0].classList.contains('xz4')) {
      cbys[0].classList.remove('xz4');
    }
    if (cbys[3].classList.contains('xz4')) {
      cbys[3].classList.remove('xz4');
    }
    if (cbys[4].classList.contains('xz4')) {
      cbys[4].classList.remove('xz4');
    }
  })
  cbys[2].addEventListener('mouseout', cb422 = function () {
    if (cbys[2].classList.contains('ax')) {

    } else {
      cbys[2].classList.remove('xz4');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz4');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz4');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz4');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz4');
    }
  })

  cbys[3].addEventListener('mouseover', cb431 = function () {
    cbys[3].classList.add('xz4');
    if (cbys[1].classList.contains('xz4')) {
      cbys[1].classList.remove('xz4');
    }
    if (cbys[0].classList.contains('xz4')) {
      cbys[0].classList.remove('xz4');
    }
    if (cbys[2].classList.contains('xz4')) {
      cbys[2].classList.remove('xz4');
    }
    if (cbys[4].classList.contains('xz4')) {
      cbys[4].classList.remove('xz4');
    }
  })
  cbys[3].addEventListener('mouseout', cb432 = function () {
    if (cbys[3].classList.contains('ax')) {

    } else {
      cbys[3].classList.remove('xz4');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz4');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz4');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz4');
    }
    if (cbys[4].classList.contains('ax')) {
      cbys[4].classList.add('xz4');
    }
  })

  cbys[4].addEventListener('mouseover', cb441 = function () {
    cbys[4].classList.add('xz4');
    if (cbys[1].classList.contains('xz4')) {
      cbys[1].classList.remove('xz4');
    }
    if (cbys[0].classList.contains('xz4')) {
      cbys[0].classList.remove('xz4');
    }
    if (cbys[3].classList.contains('xz4')) {
      cbys[3].classList.remove('xz4');
    }
    if (cbys[2].classList.contains('xz4')) {
      cbys[2].classList.remove('xz4');
    }
  })
  cbys[4].addEventListener('mouseout', cb442 = function () {
    if (cbys[4].classList.contains('ax')) {

    } else {
      cbys[4].classList.remove('xz4');
    }
    if (cbys[1].classList.contains('ax')) {
      cbys[1].classList.add('xz4');
    }
    if (cbys[2].classList.contains('ax')) {
      cbys[2].classList.add('xz4');
    }
    if (cbys[3].classList.contains('ax')) {
      cbys[3].classList.add('xz4');
    }
    if (cbys[0].classList.contains('ax')) {
      cbys[0].classList.add('xz4');
    }
  })

}


function removecbxt4() {

  for (var i = 0; i < cbys.length; i++) {
    if (cbys[i].classList.contains('ax')) {
      cbys[i].classList.remove('xz4');
    }

  }

  cbys[0].removeEventListener('mouseover', cb401);
  cbys[0].removeEventListener('mouseout', cb402);

  cbys[1].removeEventListener('mouseover', cb411);
  cbys[1].removeEventListener('mouseout', cb412);

  cbys[2].removeEventListener('mouseover', cb421);
  cbys[2].removeEventListener('mouseout', cb422);

  cbys[3].removeEventListener('mouseover', cb431);
  cbys[3].removeEventListener('mouseout', cb432);

  cbys[4].removeEventListener('mouseover', cb441);
  cbys[4].removeEventListener('mouseout', cb442);

}



