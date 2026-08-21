const menuTogglerIcon = document.querySelector('.menu-icon')
const mobileNav       = document.querySelector('.mobile-nav')
const closeNavbar     = document.querySelector('.mobile-navbar-close')
const onNavbarToggle = (e) => mobileNav.classList.toggle('show-nav')

const featureToggleButtons = document.querySelectorAll(".toggle-side button")
const presentationView = document.querySelectorAll('.presentation-view')
console.log(presentationView);

const goleft = document.querySelector('.goleft')
const goright = document.querySelector('.goright')
const carousel = document.querySelector('.carousel')

const viewportWidth = window.matchMedia("(min-width: 1024px)")


menuTogglerIcon.addEventListener('click', onNavbarToggle)

closeNavbar.addEventListener('click', onNavbarToggle)

featureToggleButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        const toActive = index
        featureToggleButtons.forEach(btn => btn.classList.remove('active-view'))
        e.target.classList.add('active-view')

        presentationView.forEach((view, index) => {
           if (toActive === index ) {
                view.classList.remove('hidden-view')
           } else {
                view.classList.add('hidden-view')
           }
        })
    })
})


let currentIndex

function getSliderWidth() {
    return viewportWidth.matches ? Math.ceil(carousel.parentElement.offsetWidth / 3) : carousel.parentElement.offsetWidth
}

function updateButton() {
    console.log("for disabled", currentIndex);
    
    goleft.disabled = currentIndex === 0
    console.log(goleft.disabled);
    
    if (viewportWidth.matches) {
        console.log("mathc");
        
        goright.disabled = carousel.children.length - 3 === currentIndex
    } else {
        goright.disabled = carousel.children.length -1 === currentIndex
    }
}

function getNextSlider(index) {
    console.log(index);
    
    const sliderWidth = getSliderWidth()
    carousel.style.transform = `translateX(-${sliderWidth * index}px)`
    updateButton()
}

goleft.addEventListener('click', () => {
    console.log('clikc');
    currentIndex--
    getNextSlider(currentIndex)
})

goright.addEventListener('click', () => {
    console.log('cclick');
    
    currentIndex++
    getNextSlider(currentIndex)
})

currentIndex = 0
getNextSlider(currentIndex)