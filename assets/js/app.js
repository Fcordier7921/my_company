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

//-----------Animating brushwood----------   
function intiAnimationPresretation() {
    const animTimeligne = gsap.timeline({
        defaults: {
            ease: "power1.out",
            duration: 0.5
        }
    });

    animTimeligne
        .fromTo(titrePresentation, { autoAlpha: 0, x: '-50vw' }, { autoAlpha: 1, x: '0vw' })
        .to(imgPresentationOne, { duration: 3, autoAlpha: 0, x: '-100vw' }, '+=1')
        .to(imgPresentationtow, { duration: 3, autoAlpha: 0, x: '100vw' }, '<')
        //zoom start
        .to(imgPresentationthree, { duration: 0.70, y: 0, x: -200, width: '110%' }, '<')
        .to(imgPresentationfour, { duration: 0.70, y: 0, x: 300, width: '110%' }, '<')
        .to(imgPresentationFive, { duration: 0.70, y: 0, x: -250, width: '110%' }, '<')
        .to(imgPresentationsix, { duration: 0.70, y: 0, x: 250, width: '110%' }, '<')
        //zoom end
        .to(imgPresentationthree, { duration: 2.5, autoAlpha: 0, x: '-100vw' }, '<0.2')
        .to(imgPresentationfour, { duration: 2.5, autoAlpha: 0, x: '100vw' }, '<')
        //zoom start
        .to(imgPresentationFive, { y: 0, x: -550, width: '120%' }, '<')
        .to(imgPresentationsix, { y: 0, x: 550, width: '120%' }, '<')
        .to(imgPresentationSeven, { y: 0, x: -100, width: '70%' }, '<')
        .to(imgPresentationeight, { y: 0, x: 0, width: '70%' }, '<')
        .to(imgPresentationnine, { y: 0, x: 150, width: '70%' }, '<')
        .to(imgPresentationTen, { y: 0, x: 100, width: '70%' }, '<')
        .to(imgPresentationEleven, { y: 0, x: 0, width: '70%' }, '<')
        .to(imgPresentationTwelve, { y: 0, x: 0, width: '70%' }, '<')
        //zoom end
        .to(imgPresentationFive, { duration: 2.5, autoAlpha: 0, x: '-100vw' }, '<0.2')
        .to(imgPresentationsix, { duration: 2.5, autoAlpha: 0, x: '100vw' }, '<')
        //zoom start
        .to(imgPresentationSeven, { y: -350, x: -370, width: '70%', height: '150%' }, '<')
        .to(imgPresentationeight, { y: -250, x: 300, width: '70%', height: '150%' }, '<')
        .to(imgPresentationnine, { y: -310, x: -250, width: '70%', height: '150%' }, '<')
        .to(imgPresentationTen, { y: -310, x: 150, width: '70%', height: '150%' }, '<')
        .to(imgPresentationEleven, { y: -250, x: 0, width: '70%', height: '150%' }, '<')
        .to(imgPresentationTwelve, { y: -250, x: -150, width: '70%', height: '150%' }, '<')
        //zoom end
        .to(imgPresentationSeven, { autoAlpha: 0, x: '-100vw' }, '<0.2')
        .to(imgPresentationeight, { autoAlpha: 0, x: '100vw' }, '<')
        .to(imgPresentationnine, { autoAlpha: 0, x: '-100vw' }, '<0.2')
        .to(imgPresentationTen, { autoAlpha: 0, x: '100vw' }, '<')
        .to(imgPresentationTwelve, { autoAlpha: 0, x: '100vw' }, '<0.2')
        .to(imgPresentationEleven, { autoAlpha: 0, x: '-100vw' }, '<')


    .to(imgPresentationThirteen, { duration: 0.5, autoAlpha: 0, duration: 0.5 })





}
window.addEventListener('load', intiAnimationPresretation)