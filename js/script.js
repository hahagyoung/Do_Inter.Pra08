//반응형 서브메뉴 만들기
const bar = document.querySelector(".bar");
const gnb = document.querySelector(".gnb");

bar.addEventListener("click", ()=>{
    gnb.classList.toggle("on");
    bar.classList.toggle("on");
});