const toggleAsideBtn = document.querySelector('#toggleAsideBtn');
const toggleAsideMenu = document.querySelector('#toggleAsideMenu');
const toggleContentWidth = document.querySelector('#toggleContentWidth');

toggleAsideBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const childIcon = toggleAsideBtn.querySelector('.fa-solid');
    if (childIcon) {
        childIcon.classList.toggle('fa-rotate-180');
    }
    toggleAsideMenu.classList.toggle('aside-hide');
    toggleContentWidth.classList.toggle('aside-open');
});
