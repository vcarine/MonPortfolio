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

const bienvenue = document.querySelector('.bienvenue');

let typewriter1 = new Typewriter(bienvenue,{
    loop: false,
    deleteSpeed: 20
})
typewriter1
    .typeString('<span style="color: black ">Bienvenue sur mon Portfolio</span> ')
    .pauseFor(1800)
    .changeDelay(20)

    .start()

//Animation de L'écriture

const txtAnim = document.querySelector('.text-animation');

let typewriter = new Typewriter(txtAnim,{
    loop: false,
    deleteSpeed:20
})

typewriter
    .pauseFor(1800)
    .changeDelay(50)
    .typeString('<strong style="font-size: 18px"> Carine Vinagre </strong>')
    .pauseFor(300)
    .typeString(', Développeur Full-Stack!')
    .pauseFor(1000)
    .deleteChars(12)
    .typeString('<span style="color: #27ae60;"> Html, Css, Bootstrap,Js</span> ')
    .pauseFor(1000)
    .deleteChars(25)
    .typeString('<span style="color: #EA39ff;"> Php, Symfony</span> ')
    .pauseFor(1000)
    .deleteChars(14)
    .typeString('<span style="color: midnightblue;"> Angular</span> ')
    .pauseFor(1000)
    .deleteChars(8)
    .typeString('<span style="color: green;"> Wordpress</span> ')
    .pauseFor(1000)
    .deleteChars(11)
    .typeString(' Full-Stack !')

    .start()
