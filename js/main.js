const searchEL = document.querySelector('.search');
const searchInputEL = searchEL.querySelector('input');

searchEL.addEventListener('click', function () {
    searchInputEL.focus();

});

searchInputEL.addEventListener('focus', function () {
    searchEL.classList.add('focused');
    searchInputEL.setAttribute('placeholder','통합검색');
});

searchInputEL.addEventListener('blur', function () {
    searchEL.classList.remove('focused');
    searchInputEL.setAttribute('placeholder','');
});

const badgeEL = document.querySelector('header .badges');
const toTopEL = document.querySelector("#to-top");

window.addEventListener('scroll', _.throttle(function () {
    if(window.scrollY > 500){
        //gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEL, .6, {
            opacity: 0,
            display: 'none'
        });
        gsap.to(toTopEL, .2, {
            x: 0
        });
    }
    else {
        gsap.to(badgeEL, .6, {
            opacity: 1,
            display: 'block'
        });
        gsap.to(toTopEL, .2, {
            x: 100
        });
    }
}, 300));
// _.throttle(함수, 시간)


toTopEL.addEventListener('click', function () {
    gsap.to(window, .5, {
        scrollTo: 0
    });
})


const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function (fadeEL, index) {
    gsap.to(fadeEL, .1, {
        delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.7
        opacity: 1
    })
});


//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})

new Swiper('.promotion .swiper-container', {
    //direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        deplay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
    },

    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion == true) {
        promotionEl.classList.add('hide');
    }else {
        promotionEl.classList.remove('hide');
    }
});

//범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // '.tofixed()' 를 통해 반환된 문자 데이터를,
    // '.parseFloat()'을 통해 수소점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min));
}

function floatingObject(selector, delay, size) {
    //gsap.to(요소, 시간, 옵션)
    gsap.to(
        selector, //선택자
        random(1.5, 2.5),  //애니메이션 동작 시간
        {
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay)
        }
    );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,  //보여짐 여부를 감시할 요소를 
        triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

