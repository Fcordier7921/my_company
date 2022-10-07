//-------------variable for @media -------
// let mediaQueriesGsap = gsap.matchMedia();

//------------------navigation menu -----------

const body = document.querySelector('body');
const header = document.querySelector('header');
const btn = document.querySelector('.contLigne');
const nav = document.querySelector('nav');
const LigneBtn = document.querySelectorAll('.lignes');

const menulist = document.querySelector('header nav ul');
const menuLigneOne = document.querySelector('header nav ul .menuLigneOne');
const menuLigneTwo = document.querySelector('header nav ul .menuLigneTwo');
const menuLigneThree = document.querySelector('header nav ul .menuLigneThree');
const menuLigneFour = document.querySelector('header nav ul .menuLigneFour');
const menuLigneFive = document.querySelector('header nav ul .menuLigneFive');



function displayNav() {
    if (btn.className === 'contLigne btn1 active') {


        const watchTheNavigation = gsap.timeline();

        watchTheNavigation
            .fromTo(menuLigneFive, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: '7vw' }, '-=0.1')
            .fromTo(menuLigneFour, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: '7vw' }, '-=0.3')
            .fromTo(menuLigneThree, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: '7vw' }, '-=0.4')
            .fromTo(menuLigneTwo, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: '7vw' }, '-=0.35')
            .fromTo(menuLigneOne, { autoAlpha: 1, x: 0 }, { autoAlpha: 0, x: '7vw' }, '-=0.37')
            .fromTo(nav, { duration: 1, autoAlpha: 1, x: 0 }, { duration: 1, autoAlpha: 0, x: '100vw', scrollSnapAlign: 'start' })
            .fromTo(header, { duration: 1, y: 0, minHeight: '100vh', overflowY: "scroll", alignItems: 'flex-start' }, { duration: .1, y: 0, minHeight: '170px', overflowY: "hidden", scrollSnapAlign: 'end' })
            .fromTo(body, { duration: .05, overflowY: "hidden" }, { duration: .1, overflowY: "scroll" }, '<')

        btn.classList.remove('active');

    } else {
        btn.classList.toggle('active');


        const hideTheNav = gsap.timeline();

        hideTheNav

            .fromTo(body, { duration: .05, overflowY: "scroll" }, { duration: .1, overflowY: "hidden" })
            .fromTo(nav, { duration: 1, autoAlpha: 0, x: '100vw' }, { duration: 1, autoAlpha: 1, x: 0 }, '<')
            .fromTo(header, { duration: 1, y: 0, minHeight: '170px', overflowY: "hidden", alignItems: 'center' }, { duration: .1, y: 0, minHeight: '100vh', overflowY: "scroll", alignItems: 'flex-start' }, '<')
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


//------------------navigation menu  scroll-----------
const logoSrcoll = document.querySelector('header .logoScroll');

gsap.to(logoSrcoll, {
    duration: 1,
    y: 0,
    scale: 2,
    autoAlpha: 0,
    scrollTrigger: {
        trigger: ".logoScroll",
        markers: false,
        start: "end+=100 5%",
        end: "end+=320 top",
        toggleActions: "play complete reverse reset"
    }
})

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
const titreTowPresentation = document.querySelector('.presentationTitle h2')
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
        .fromTo(titrePresentation, { autoAlpha: 0, x: '-50vw' }, { autoAlpha: 1, x: '0vw', ease: "power1.out", zIndex: 300 })
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
        //phase 4
        .to(backgrondPresentation, { duration: 2.2, backgroundColor: 'rgba(0, 0, 0, 0)', ease: "power1.out" }, '<')
        .to(imgPresentationfourteen, { duration: 2.2, autoAlpha: 0, ease: "power4.out" }, '<1.5')
        .to(titreTowPresentation, { duration: 0.5, autoAlpha: 1 }, '<')
        .to(buttonPresentation, { duration: 0.5, autoAlpha: 1 }, '<')
        .to(nextPresentation, { duration: 0.5, autoAlpha: 1 }, '<')
        .to(nextPresentation, { duration: 2, zIndex: 700 }, '<')
        .to(buttonPresentation, { duration: 2, zIndex: 700 }, '<0.7')


    let dateCookiePresentztion = new Date(Date.now() + 86400000);
    dateCookiePresentztion = dateCookiePresentztion.toUTCString();

    document.cookie = 'WelcomeEntertainment=ok; path=/;  expires=' + dateCookiePresentztion



}

//--------Cookie management, for the start animation------------
const cookieValue = document.cookie.split('; ');
console.log(cookieValue);
if (cookieValue.includes("WelcomeEntertainment=ok")) {

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
} else {
    window.addEventListener('load', intiAnimationPresretation);
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


//--------website pack section--------


const detailscardPackButton = Array.from(document.querySelectorAll('.jsdetailscardPack'));
const detailscardPack = document.querySelector('.detailscardPack');
const packSection = document.querySelector('#pack');
const closingdetailscardPack = document.querySelector('.closingdetailscardPack');
const overlayDetailscardPack = document.querySelector('.overlayDetailscardPack');


function adddetailscardPack() {
    if (detailscardPack.classList.contains("ActivedetailscardPack")) {
        detailscardPack.classList.remove('ActivedetailscardPack');
        overlayDetailscardPack.classList.remove('ActivedetailscardPack');

    } else {
        detailscardPack.classList.add('ActivedetailscardPack');
        overlayDetailscardPack.classList.add('ActivedetailscardPack');

        window.location.replace("http://freelance.local/services.php#bodydetailscardPackId");
    }
}

for (let i = 0; i < detailscardPackButton.length; i++) {

    detailscardPackButton[i].addEventListener('click', adddetailscardPack)

}

closingdetailscardPack.addEventListener('click', adddetailscardPack)
overlayDetailscardPack.addEventListener('click', adddetailscardPack)