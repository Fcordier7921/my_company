//-------------variable for @media -------
let mediaQueriesGsap = gsap.matchMedia();

//------------------navigation menu -----------


const btn = document.querySelector('.contLigne');
const nav = document.querySelector('nav');
const LigneBtn = document.querySelectorAll('.lignes');
const menuLigneOne = document.querySelector('header nav ul li:nth-child(1)');
const menuLigneTwo = document.querySelector('header nav ul li:nth-child(2)');
const menuLigneThree = document.querySelector('header nav ul li:nth-child(3)');
const menuLigneFour = document.querySelector('header nav ul li:nth-child(4)');
const menuLigneFive = document.querySelector('header nav ul li:nth-child(5)');
console.log(menuLigneFour);

function displayNav() {
    if (btn.className === 'contLigne btn1 active') {


        const watchTheNavigation = gsap.timeline();

        watchTheNavigation
            .fromTo(menuLigneFive, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: '7vw' }, '-=0.1')
            .fromTo(menuLigneFour, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: '7vw' }, '-=0.3')
            .fromTo(menuLigneThree, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: '7vw' }, '-=0.4')
            .fromTo(menuLigneTwo, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: '7vw' }, '-=0.35')
            .fromTo(menuLigneOne, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: '7vw' }, '-=0.37')
            .fromTo(nav, { duration: 1, autoAlpha: 1, x: 0 }, { duration: 1, autoAlpha: 0, x: '100vw' }, '-=0.2')

        btn.classList.remove('active');

    } else {
        btn.classList.toggle('active');


        const hideTheNav = gsap.timeline();

        hideTheNav

            .fromTo(nav, { duration: 1, autoAlpha: 0, x: '100vw' }, { duration: 1, autoAlpha: 1, x: 0 })
            .fromTo(menuLigneOne, { autoAlpha: 0, x: '7vw' }, { autoAlpha: 1, x: 0 }, '-=1')
            .fromTo(menuLigneTwo, { autoAlpha: 0, x: '7vw' }, { autoAlpha: 1, x: 0 }, '-=0.8')
            .fromTo(menuLigneThree, { autoAlpha: 0, x: '7vw' }, { autoAlpha: 1, x: 0 }, '-=0.6')
            .fromTo(menuLigneFour, { autoAlpha: 0, x: '7vw' }, { autoAlpha: 1, x: 0 }, '-=0.4')
            .fromTo(menuLigneFive, { autoAlpha: 0, x: '7vw' }, { autoAlpha: 1, x: 0 }, '-=0.2')
    }



}

btn.addEventListener('click', displayNav);
menuLigneOne.addEventListener('click', displayNav);
menuLigneTwo.addEventListener('click', displayNav);
menuLigneThree.addEventListener('click', displayNav);
menuLigneFour.addEventListener('click', displayNav);


//------------------section presentation -----------
const imgPresentationOne = document.querySelector('.imgAnimation11')
const imgPresentationtow = document.querySelector('.imgAnimation12')
const imgPresentationthree = document.querySelector('.imgAnimation9')
const imgPresentationfour = document.querySelector('.imgAnimation10')
const imgPresentationFive = document.querySelector('.imgAnimation7')
const imgPresentationsix = document.querySelector('.imgAnimation8')
const imgPresentationSeven = document.querySelector('.imgAnimation6')
const imgPresentationeight = document.querySelector('.imgAnimation5')
const imgPresentationnine = document.querySelector('.imgAnimation4')
const imgPresentationTen = document.querySelector('.imgAnimation3')
const imgPresentationEleven = document.querySelector('.imgAnimation2')
const imgPresentationTwelve = document.querySelector('.imgAnimation1')
const imgPresentationThirteen = document.querySelector('.imgAnimation13')
const titrePresentation = document.querySelector('.presentationTitle h1')


function intiAnimationPresretation() {
    const animTimeligne = gsap.timeline();

    animTimeligne
        .fromTo(titrePresentation, { autoAlpha: 0, x: '-50vw' }, { autoAlpha: 1, x: '0vw' })
        .to(imgPresentationOne, { autoAlpha: 0, x: '-100vw' })
        .to(imgPresentationtow, { autoAlpha: 0, x: '100vw' })
        .to(imgPresentationthree, { autoAlpha: 0, x: '-100vw' })
        .to(imgPresentationfour, { autoAlpha: 0, x: '100vw' })
        .to(imgPresentationFive, { autoAlpha: 0, x: '-100vw' })
        .to(imgPresentationsix, { autoAlpha: 0, x: '100vw' })
        .to(imgPresentationSeven, { autoAlpha: 0, x: '-100vw' })
        .to(imgPresentationeight, { autoAlpha: 0, x: '100vw' })
        .to(imgPresentationnine, { autoAlpha: 0, x: '-100vw' })
        .to(imgPresentationTen, { autoAlpha: 0, x: '100vw' })
        .to(imgPresentationEleven, { autoAlpha: 0, x: '-100vw' })
        .to(imgPresentationTwelve, { autoAlpha: 0, x: '100vw' })
        .to(imgPresentationThirteen, { autoAlpha: 0, duration: 0.5 })

}
window.addEventListener('load', intiAnimationPresretation)