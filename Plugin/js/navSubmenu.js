const dropdownSubmenu = document.querySelectorAll('.dropdown-submenu');

dropdownSubmenu.forEach((submenu) => {
    submenu.addEventListener('click', (e) => {
        e.preventDefault();
        const navSubmenu = submenu.querySelector('.dropdown-submenu');
        console.log(e);
        if (navSubmenu) {
            navSubmenu.classList.toggle('show'); // 這裡假設有 CSS 樣式 `.show` 控制顯示/隱藏
        }
    });
});
