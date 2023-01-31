const mobileNavbarMenu = document.querySelector('.navbar__modal_menu');
const modalBackground = document.querySelector('.navbar__modal_background');
const featuresArrow = document.querySelector('#features__arrow')
const featuresSubList = document.querySelector('#features__sublist')
const companyArrow = document.querySelector('#company__arrow')
const companySubList = document.querySelector('#company__sublist')

function showNavbarMenu(){
    modalBackground.classList.toggle('navbar__modal_background--inactive')
    mobileNavbarMenu.classList.toggle('navbar__modal_menu--inactive')
}

function hideNavbarMenu(){
    modalBackground.classList.toggle('navbar__modal_background--inactive')
    mobileNavbarMenu.classList.toggle('navbar__modal_menu--inactive')
    companySubList.classList.toggle('navbar__sub_list--inactive', true)
    featuresSubList.classList.toggle('navbar__sub_list--inactive', true)
}

function showFeatures(){
    featuresSubList.classList.toggle('navbar__sub_list--inactive')
    companySubList.classList.toggle('navbar__sub_list--inactive', true)
}

function showCompany(){
    companySubList.classList.toggle('navbar__sub_list--inactive')
    featuresSubList.classList.toggle('navbar__sub_list--inactive', true)
}

featuresArrow.addEventListener('click', showFeatures)
companyArrow.addEventListener('click', showCompany)
window.addEventListener('resize', ()=>{
    modalBackground.classList.toggle('navbar__modal_background--inactive', true)
    mobileNavbarMenu.classList.toggle('navbar__modal_menu--inactive', true)
    companySubList.classList.toggle('navbar__sub_list--inactive', true)
    featuresSubList.classList.toggle('navbar__sub_list--inactive', true)
})