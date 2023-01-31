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
}

function showFeatures(){
    featuresSubList.classList.toggle('navbar__sub_list--inactive')
}

function showCompany(){
    companySubList.classList.toggle('navbar__sub_list--inactive')
}

featuresArrow.addEventListener('click', showFeatures)
companyArrow.addEventListener('click', showCompany)