const menuTogglerIcon = document.querySelector('.menu-icon')
const mobileNav       = document.querySelector('.mobile-nav')
const closeNavbar     = document.querySelector('.mobile-navbar-close')
const onNavbarToggle = (e) => mobileNav.classList.toggle('show-nav')

menuTogglerIcon.addEventListener('click', onNavbarToggle)

closeNavbar.addEventListener('click', onNavbarToggle)

