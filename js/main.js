var elOpenModalBtn = document.querySelector(".site-header__link--js-open-modal");
var elModal = document.querySelector(".modal");
var elXCloseModalBtn = document.querySelector(".modal__x-button--js-close-modal");
var elBodyModal = document.querySelector(".site-body");

elOpenModalBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    elModal.classList.add("modal--open");
    elBodyModal.classList.add("site-body__stop");
});

elXCloseModalBtn.addEventListener("click", function(){
    elModal.classList.remove("modal--open");
    elBodyModal.classList.remove("site-body__stop");
});