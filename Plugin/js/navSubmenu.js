const dropdownSubmenu = document.querySelectorAll('.dropdown-submenu');

dropdownSubmenu.forEach((submenu) => {
    submenu.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const childSubmenu = submenu.querySelector('.dropdown-menu');
        if (childSubmenu) {
            childSubmenu.classList.toggle('show');
        }
    });
});
