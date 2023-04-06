const share = document.querySelector('.icon');
const shareIcons = document.querySelector('.shareIcons');
const shareMobile = document.querySelector('.icon-mobile')

share.addEventListener('click', fnshareIcons);
shareMobile.addEventListener('click',fnshareIcons);

function fnshareIcons() {
    shareIcons.classList.toggle('inactive');
}