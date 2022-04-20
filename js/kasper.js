//change landing background
var changeLeft = document.querySelector('.left'),
    changeRight = document.querySelector('.right'),
    landing = document.querySelector('.landing');    

changeRight.onclick = function change() {
    'use strict';
    landing.classList.remove('change1');
    landing.classList.toggle('change2');
};
changeLeft.onclick = function change() {
    'use strict';
    landing.classList.remove('change2');
    landing.classList.toggle('change1');
};

var first = document.querySelector('.firstLi'),
    second = document.querySelector('.secondLi'),
    third = document.querySelector('.thirdLi'),
    ul = document.getElementById('ul');

first.onclick = function changer() {
    'use strict';
    landing.classList.remove('change2',);
    landing.classList.add('change1');
    first.classList.add('active');
    second.classList.remove('active');
    third.classList.remove('active');
};
second.onclick = function changer() {
    'use strict';
    landing.classList.remove('change2','change1');
    second.classList.add('active');
    first.classList.remove('active');
    third.classList.remove('active');
};
third.onclick = function changer() {
    'use strict';
    landing.classList.remove('change1');
    landing.classList.add('change2');
    third.classList.add('active');
    first.classList.remove('active');
    second.classList.remove('active');
};

    //show list
var  i = document.querySelector('.menu');

i.onclick = function () {
    'use strict';
    ul.classList.toggle('show')
};

    //scroll
var scrollButton = document.querySelector('.scroll');

window.onscroll = function () {
    if (this.scrollY >= 1000) {
        scrollButton.classList.add('scrolling');
    } else {
        scrollButton.classList.remove('scrolling');
    };
};
