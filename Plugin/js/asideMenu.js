const toggleAsideBtn = document.querySelector('#toggleAsideBtn');
const sectionWrapper = document.querySelector('.section-wrapper');

toggleAsideBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const childIcon = toggleAsideBtn.querySelector('.fa-solid');
    if (childIcon) {
        childIcon.classList.toggle('fa-rotate-180');
    }
    sectionWrapper.classList.toggle('aside-open');
});
