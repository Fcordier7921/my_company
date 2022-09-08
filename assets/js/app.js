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
const backgrondPresentation = document.querySelector('.contenaireAnimation')
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
const titreTowPresentation = document.querySelector('.presentationTitletow h2')
const buttonPresentation = document.querySelector('.title .titleNext .contactButun')
const nextPresentation = document.querySelector('.title .titleNext .next')

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
        .to(titreTowPresentation, { duration: 0.5, autoAlpha: 1 }, '<')
        .to(buttonPresentation, { duration: 0.5, autoAlpha: 1 }, '<')
        .to(nextPresentation, { duration: 0.5, autoAlpha: 1 }, '<')
        //phase 4
        .to(backgrondPresentation, { duration: 2.2, backgroundColor: 'rgba(0, 0, 0, 0)', ease: "power1.out" }, '<')
        .to(imgPresentationfourteen, { duration: 0.5, autoAlpha: 0 }, '<1.5')
        .to(nextPresentation, { duration: 2, zIndex: 700 }, '<')
        .to(buttonPresentation, { duration: 2, zIndex: 700 }, '<0.7')

    let dateCookiePresentztion = new Date(Date.now() + 86400000);
    dateCookiePresentztion = dateCookiePresentztion.toUTCString();

    document.cookie = 'WelcomeEntertainment=ok; path=http://freelance.local//; secure; expires=' + dateCookiePresentztion



}

//--------Cookie management, for the start animation------------

const cookieValue = document.cookie.split('; ')[0];
if (cookieValue != "WelcomeEntertainment=ok") {
    window.addEventListener('load', intiAnimationPresretation)
} else {
    backgrondPresentation.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    imgPresentationOne.style.opacity = 0;
    imgPresentationtow.style.opacity = 0;
    imgPresentationthree.style.opacity = 0;
    imgPresentationfour.style.opacity = 0;
    imgPresentationFive.style.opacity = 0;
    imgPresentationsix.style.opacity = 0;
    imgPresentationSeven.style.opacity = 0;
    imgPresentationeight.style.opacity = 0;
    imgPresentationnine.style.opacity = 0;
    imgPresentationTen.style.opacity = 0;
    imgPresentationEleven.style.opacity = 0;
    imgPresentationTwelve.style.opacity = 0;
    imgPresentationThirteen.style.opacity = 0;
    imgPresentationfourteen.style.opacity = 0;

    const animTimeligneElse = gsap.timeline({
        defaults: {
            ease: "sine.inOut",
            duration: 2
        }
    });
    animTimeligneElse
        .fromTo(titrePresentation, { autoAlpha: 0, x: '-50vw' }, { autoAlpha: 1, x: '0vw', ease: "power1.out" })
        .to(titreTowPresentation, { duration: 0.5, autoAlpha: 1 }, '<')
        .to(buttonPresentation, { duration: 0.5, autoAlpha: 1 }, '<')
        .to(nextPresentation, { duration: 0.5, autoAlpha: 1 }, '<')
        .to(buttonPresentation, { duration: 0.5, zIndex: 700 }, '<')
        .to(nextPresentation, { duration: 0.5, zIndex: 700 }, '<')
        .to(backgrondPresentation, { duration: 2, backgroundColor: 'rgba(0, 0, 0, 0)' }, '<')
        .to(imgPresentationfourteen, { duration: 0.5, autoAlpha: 0 }, '<1.5')



    titrePresentation.style.opacity = 1;
    titreTowPresentation.style.opacity = 1;
    buttonPresentation.style.opacity = 1;
}

//--------silde of the expertise section--------

const quotesOne = document.querySelector('.titleExpertise .quotes .quotesOne');
const quotesTwo = document.querySelector('.titleExpertise .quotes .quotesTwo');
const quotesThree = document.querySelector('.titleExpertise .quotes .quotesThree');
const quotesFour = document.querySelector('.titleExpertise .quotes .quotesFour');
const managementExpertise = document.querySelector('.bodyExpertise .explanationsExpertise .managementExpertise');
const disgnExpertise = document.querySelector('.bodyExpertise .explanationsExpertise .disgnExpertise');
const devExpertise = document.querySelector('.bodyExpertise .explanationsExpertise .devExpertise');
const performanceExpertise = document.querySelector('.bodyExpertise .explanationsExpertise .performanceExpertise');

const listeMenuExpertiseAll = document.querySelectorAll('.bodyExpertise .menuExpertise .listeMenuExpertise div');

const managementExpertiseDiv = document.querySelector('.bodyExpertise .menuExpertise .listeMenuExpertise div:nth-child(1)');
const disgnExpertiseDiv = document.querySelector('.bodyExpertise .menuExpertise .listeMenuExpertise div:nth-child(2)');
const devExpertiseDiv = document.querySelector('.bodyExpertise .menuExpertise .listeMenuExpertise div:nth-child(3)');
const performanceExpertiseDiv = document.querySelector('.bodyExpertise .menuExpertise .listeMenuExpertise div:nth-child(4)');

for (let i = 0; i < listeMenuExpertiseAll.length; i++) {

    listeMenuExpertiseAll[i].addEventListener('click', () => {

        if (listeMenuExpertiseAll[i] === managementExpertiseDiv) {

            disgnExpertiseDiv.classList.remove("activeExpertise");
            devExpertiseDiv.classList.remove("activeExpertise");
            performanceExpertiseDiv.classList.remove("activeExpertise");
            managementExpertiseDiv.classList.add("activeExpertise");

            disgnExpertise.classList.remove("explanationsExpertiseActive");
            devExpertise.classList.remove("explanationsExpertiseActive");
            performanceExpertise.classList.remove("explanationsExpertiseActive");
            managementExpertise.classList.add("explanationsExpertiseActive");

            quotesOne.style.opacity = 1;
            quotesTwo.style.opacity = 0;
            quotesThree.style.opacity = 0;
            quotesFour.style.opacity = 0;



        } else if (listeMenuExpertiseAll[i] === disgnExpertiseDiv) {
            managementExpertiseDiv.classList.remove("activeExpertise");
            devExpertiseDiv.classList.remove("activeExpertise");
            performanceExpertiseDiv.classList.remove("activeExpertise");
            disgnExpertiseDiv.classList.add("activeExpertise");

            managementExpertiseDiv.classList.remove("explanationsExpertiseActive");
            devExpertise.classList.remove("explanationsExpertiseActive");
            performanceExpertise.classList.remove("explanationsExpertiseActive");
            disgnExpertise.classList.add("explanationsExpertiseActive");

            quotesOne.style.opacity = 0;
            quotesTwo.style.opacity = 1;
            quotesThree.style.opacity = 0;
            quotesFour.style.opacity = 0;

        } else if (listeMenuExpertiseAll[i] === devExpertiseDiv) {
            managementExpertiseDiv.classList.remove("activeExpertise");
            disgnExpertiseDiv.classList.remove("activeExpertise");
            performanceExpertiseDiv.classList.remove("activeExpertise");
            devExpertiseDiv.classList.add("activeExpertise");

            managementExpertiseDiv.classList.remove("explanationsExpertiseActive");
            disgnExpertise.classList.remove("explanationsExpertiseActive");
            performanceExpertise.classList.remove("explanationsExpertiseActive");
            devExpertise.classList.add("explanationsExpertiseActive");

            quotesOne.style.opacity = 0;
            quotesTwo.style.opacity = 0;
            quotesThree.style.opacity = 1;
            quotesFour.style.opacity = 0;

        } else if (listeMenuExpertiseAll[i] === performanceExpertiseDiv) {
            managementExpertiseDiv.classList.remove("activeExpertise");
            disgnExpertiseDiv.classList.remove("activeExpertise");
            devExpertiseDiv.classList.remove("activeExpertise");
            performanceExpertiseDiv.classList.add("activeExpertise");

            managementExpertiseDiv.classList.remove("explanationsExpertiseActive");
            disgnExpertise.classList.remove("explanationsExpertiseActive");
            devExpertise.classList.remove("explanationsExpertiseActive");
            performanceExpertise.classList.add("explanationsExpertiseActive");

            quotesOne.style.opacity = 0;
            quotesTwo.style.opacity = 0;
            quotesThree.style.opacity = 0;
            quotesFour.style.opacity = 1;

        }


    });

}



// managementExpertise.addEventListener('click', () => {
//     if (managementExpertise.classList.contains('explanationsExpertiseActive')) {
//         alert('ret gger')
//     }
//     disgnExpertise.classList.remove("explanationsExpertiseActive");
//     devExpertise.classList.remove("explanationsExpertiseActive");
//     performanceExpertise.classList.remove("explanationsExpertiseActive");
// })