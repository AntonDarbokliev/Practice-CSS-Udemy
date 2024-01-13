const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const planButtons = document.querySelectorAll('.button')
const toggleBtn = document.querySelector('.toggle-button')
const mobileNav = document.querySelector('.mobile-nav')

for(const button of planButtons) {
    button.addEventListener('click', () => {
        backdrop.classList.add('open')
        modal.classList.add('open')
    })
}

toggleBtn.addEventListener('click', () => {
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
}
)

backdrop.addEventListener('click',closeModal)
if(modal)
modal.querySelector('.modal__action--negative').addEventListener('click',closeModal)

function closeModal(){
    if(modal)
    modal.classList.remove('open')
    backdrop.classList.remove('open')
    mobileNav.classList.remove('open')
}