const toggleAsideBtn = document.querySelector('.SideMenu-SwitchBtn');

toggleAsideBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(toggleAsideBtn);
    const childSubmenu = submenu.querySelector('.fa-solid');
    if (childSubmenu) {
        childSubmenu.classList.toggle('show');
    }
});
