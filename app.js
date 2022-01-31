const btnMenu = document.querySelector('.btn-rond-menu')
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.conteneur-ligne');

btnMenu.addEventListener('click', () => {

    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')
})
if (window.matchMedia('(max-width)')){
    allItemNav.forEach(item=>{
        item.addEventListener('click', ()=> {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active')
        })
    })
}


//Animation de L'écriture

const txtAnim = document.querySelector('.text-animation');

let typewriter = new Typewriter(txtAnim,{
    loop: false,
    deleteSpeed:20
})
typewriter
    .pauseFor(1800)
    .changeDelay(20)
    .typeString('Salut')
    .start()
