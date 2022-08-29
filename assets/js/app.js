//-------------variable for @media -------
// let mediaQueriesGsap = gsap.matchMedia();

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
const imgPresentationOne = document.querySelector('.imgAnimation1')
const imgPresentationtow = document.querySelector('.imgAnimation2')
const imgPresentationthree = document.querySelector('.imgAnimation3')
const imgPresentationfour = document.querySelector('.imgAnimation4')
const imgPresentationFive = document.querySelector('.imgAnimation5')
const imgPresentationsix = document.querySelector('.imgAnimation6')
const imgPresentationSeven = document.querySelector('.imgAnimation7')
const imgPresentationeight = document.querySelector('.imgAnimation8')
const imgPresentationnine = document.querySelector('.imgAnimation9')
const imgPresentationTen = document.querySelector('.imgAnimation10')
const imgPresentationEleven = document.querySelector('.imgAnimation11')
const imgPresentationTwelve = document.querySelector('.imgAnimation12')
const imgPresentationThirteen = document.querySelector('.imgAnimation13')
const imgPresentationfourteen = document.querySelector('.imgAnimation14')
const titrePresentation = document.querySelector('.presentationTitle h1')

//-----------Animating brushwood----------   
function intiAnimationPresretation() {
    const animTimeligne = gsap.timeline({
        defaults: {
            ease: "sine.inOut",
            duration: 3
        }
    });

    animTimeligne
        .fromTo(titrePresentation, { autoAlpha: 0, x: '-50vw' }, { autoAlpha: 1, x: '0vw', ease: "power1.out" })
        //phase 1
        .to(imgPresentationThirteen, { autoAlpha: 0, x: '100vw' }, '+=1.6')
        .to(imgPresentationTwelve, { autoAlpha: 0, x: '-100vw' }, '<')
        .to(imgPresentationEleven, { duration: 0.4, y: 0, x: 250 }, '<')
        .to(imgPresentationTen, { duration: 0.4, y: 0, x: -200 }, '<')
        .to(imgPresentationnine, { duration: 0.4, y: 0, x: 150 }, '<')
        .to(imgPresentationeight, { duration: 0.4, y: 0, x: -170 }, '<')
        //phase 2
        .to(imgPresentationEleven, { autoAlpha: 0, x: '100vw' }, '<0.5')
        .to(imgPresentationTen, { autoAlpha: 0, x: '-100vw' }, '<')
        .to(imgPresentationnine, { duration: 0.4, y: 0, x: 300 }, '<')
        .to(imgPresentationeight, { duration: 0.4, x: -420 }, '<')
        .to(imgPresentationSeven, { duration: 0.4, y: 0, x: 120 }, '<')
        .to(imgPresentationsix, { duration: 0.4, y: 0, x: -180 }, '<')
        .to(imgPresentationFive, { duration: 0.4, y: 0, x: 50 }, '<')
        .to(imgPresentationfour, { duration: 0.4, y: 0, x: -100 }, '<')
        //phase 3
        .to(imgPresentationnine, { autoAlpha: 0, x: '100vw' }, '<0.5')
        .to(imgPresentationeight, { autoAlpha: 0, x: '-100vw' }, '<')
        .to(imgPresentationSeven, { autoAlpha: 0, x: '100vw' }, '<')
        .to(imgPresentationsix, { autoAlpha: 0, x: '-100vw' }, '<')
        .to(imgPresentationFive, { autoAlpha: 0, x: '100vw' }, '<')
        .to(imgPresentationfour, { autoAlpha: 0, x: '-100vw' }, '<')
        .to(imgPresentationOne, { autoAlpha: 0, x: '100vw' }, '<')
        .to(imgPresentationthree, { autoAlpha: 0, x: '100vw' }, '<')
        .to(imgPresentationtow, { autoAlpha: 0, x: '-100vw' }, '<-0.05')


    .to(imgPresentationfourteen, { duration: 0.5, autoAlpha: 0, duration: 0.5 })





}
window.addEventListener('load', intiAnimationPresretation)