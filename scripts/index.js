//전체화면 휠
const nav = document.querySelectorAll('nav a')
const homeBtn = document.querySelector('nav .homebtn')
const profileBtn = document.querySelector('nav .profilebtn')
const webBtn = document.querySelector('nav .webprojectbtn')
const designBtn = document.querySelector('nav .designbtn')
const wrap = new Swiper('.wrap', {
    direction:'vertical',
    mousewheel:true,
    speed:1000,
    on: {
        slideChangeTransitionEnd: function () {
            for(let i of nav) i.classList.remove('active')
            nav[this.activeIndex].classList.add('active')
            setTimeout(() => {
                ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
            }, 0);
        }
    }
})

nav.forEach((t, i)=>{ //header-nav click event
    t.addEventListener('click',function(e){
        e.preventDefault();
        wrap.slideTo(i, 1000); //클릭한 메뉴와 동일한 index번째 슬라이드로 1초동안 이동
        setTimeout(() => {
            ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
        }, 0);
    })
})

// -----------------------------------------3페이지

//마우스따라 변환
const lenoxBtn = document.querySelector('.right_web #lenox')
const fenderBtn = document.querySelector('.right_web #fender')
const himartBtn = document.querySelector('.right_web #himart')
const lenoxSwiper = document.querySelector('.main_web .lenox_swiper')
const fenderSwiper = document.querySelector('.main_web .fender_swiper')
const himartSwiper = document.querySelector('.main_web .himart_swiper')


lenoxBtn.addEventListener('mouseover',()=>{
    lenoxSwiper.style.opacity=1;
    lenoxBtn.style.borderBottomColor = '#000';
    lenoxSwiper.style.zIndex = '20';
    lenoxSwiper.style.pointerEvents = 'auto';
    fenderSwiper.style.opacity=0;
    fenderBtn.style.borderBottomColor = '#E0EAC8';
    fenderSwiper.style.zIndex = '10';
    fenderSwiper.style.pointerEvents = 'none';
    himartSwiper.style.opacity=0;
    himartBtn.style.borderBottomColor = '#E0EAC8';
    himartSwiper.style.zIndex = '10';
    himartSwiper.style.pointerEvents = 'none';
})
fenderBtn.addEventListener('mouseover',()=>{
    lenoxSwiper.style.opacity=0;
    lenoxBtn.style.borderBottomColor = '#E0EAC8';
    lenoxSwiper.style.zIndex = '10';
    lenoxSwiper.style.pointerEvents = 'none';
    fenderSwiper.style.opacity=1;
    fenderBtn.style.borderBottomColor = '#000';
    fenderSwiper.style.zIndex = '20';
    fenderSwiper.style.pointerEvents = 'auto';
    himartSwiper.style.opacity=0;
    himartBtn.style.borderBottomColor = '#E0EAC8';
    himartSwiper.style.zIndex = '10';
    himartSwiper.style.pointerEvents = 'none';
})
himartBtn.addEventListener('mouseover',()=>{
    lenoxSwiper.style.opacity=0;
    lenoxBtn.style.borderBottomColor = '#E0EAC8';
    lenoxSwiper.style.zIndex = '10';
    lenoxSwiper.style.pointerEvents = 'none';
    fenderSwiper.style.opacity=0;
    fenderBtn.style.borderBottomColor = '#E0EAC8';
    fenderSwiper.style.zIndex = '10';
    fenderSwiper.style.pointerEvents = 'none';
    himartSwiper.style.opacity=1;
    himartBtn.style.borderBottomColor = '#000';
    himartSwiper.style.zIndex = '20';
    himartSwiper.style.pointerEvents = 'auto';
})

//스와이퍼 기본값
const lenox = new Swiper('.lenox_swiper', { 
    //옵션:값,
    autoplay:{delay:1000},//자동재생
    loop:true,//끝에서 처음으로 자연스러운 전환
    slidesPerView :3,
    spaceBetween: 20,
    direction:'vertical',
    })

const fender = new Swiper('.fender_swiper', { 
    //옵션:값,
    autoplay:{delay:1000},//자동재생
    loop:true,//끝에서 처음으로 자연스러운 전환
    slidesPerView :3,
    spaceBetween: 20,
    direction:'vertical',
    })

const himart = new Swiper('.himart_swiper', { 
    //옵션:값,
    autoplay:{delay:1000},//자동재생
    loop:true,//끝에서 처음으로 자연스러운 전환
    slidesPerView :3,
    spaceBetween: 20,
    direction:'vertical',
    })




// -----------------------------------------4페이지

// 카테고리 열기
const detailBtn = document.querySelector('.left_btn .detail_pg')
const bnrBtn = document.querySelector('.left_btn .bnr_pg')
const detailGallery = document.querySelector('.right_gallery .detail_gallery')
const bnrGallery = document.querySelector('.right_gallery .bnr_gallery')

detailBtn.addEventListener('click',()=>{
    detailGallery.style.display='grid';
    bnrGallery.style.display='none';
    detailBtn.style.borderBottomColor = '#000';
    bnrBtn.style.borderBottomColor = '#87B58D';
})
bnrBtn.addEventListener('click',()=>{
    bnrGallery.style.display='grid';
    detailGallery.style.display='none';
    detailBtn.style.borderBottomColor = '#87B58D';
    bnrBtn.style.borderBottomColor = '#000';
    return
})
// 썸네일보기
const detailthum = document.querySelectorAll('.detail_gallery .thumnail_wrapper')
const bnrthum = document.querySelectorAll('.bnr_gallery .thumnail_wrapper')
const popupBg = document.querySelector('#other_project #popup_bg')

console.log(popupBg, detailthum)

popupBg.addEventListener('click',()=>{
    popupBg.style.display = 'none';
    wrap.mousewheel.enable();
    return 
    })

    detailthum.forEach(function(element) {
        element.addEventListener('click', function() {
            const clickedThum = this; 
            const newSrc = clickedThum.children[0].src; 
            popupBg.children[0].children[0].src = newSrc;
            popupBg.style.display = 'flex';
            wrap.mousewheel.disable();/* 마우스 휠 막기 */
        });
    });
    bnrthum.forEach(function(element) {
        element.addEventListener('click', function() {
            const clickedThum = this; 
            const newSrc = clickedThum.children[0].src; 
            popupBg.children[0].children[0].src = newSrc;
            popupBg.style.display = 'flex'; 
            wrap.mousewheel.disable();/* 마우스 휠 막기 */
        });
    });

