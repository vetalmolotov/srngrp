// Import of a JavaScript modules
import {logoHeaderSVG} from './js/logoHeader'
import {logoFooterSVG} from './js/logoFooter'
import {featureIcon01SVG} from './js/featureIcon01'
import {featureIcon02SVG} from './js/featureIcon02'
import {featureIcon03SVG} from './js/featureIcon03'
import {featureIcon04SVG} from './js/featureIcon04'
import {iconMoneybox} from './js/icon-moneybox'
import {iconClose} from './js/icon-close'
import {iconYes} from './js/icon-yes'
import {iconNo} from './js/icon-no'
import {iconLock} from './js/icon-lock'
import {iconRatings} from './js/icon-ratings'

// Import of styles
import '@/styles/index.scss'

// Insert SVG icons
const logoHeader = document.querySelector('.appHeader__logo')
logoHeader.innerHTML = logoHeaderSVG()

const logoFooter = document.querySelector('.appFooter__logo')
logoFooter.innerHTML = logoFooterSVG()

const featureIcon01 = document.querySelector('.appFeaturelist__guarantee h4')
featureIcon01.innerHTML = featureIcon01SVG()

const featureIcon02 = document.querySelector('.appFeaturelist__fits h4')
featureIcon02.innerHTML = featureIcon02SVG()

const featureIcon03 = document.querySelector('.appFeaturelist__saving h4')
featureIcon03.innerHTML = featureIcon03SVG()

const featureIcon04 = document.querySelector('.appFeaturelist__rating h4')
featureIcon04.innerHTML = featureIcon04SVG()

const featureIconRatings = document.querySelector('.appFeaturelist__rating span')
featureIconRatings.innerHTML = iconRatings()

const closeButton = document.querySelector('.appModal__close')
closeButton.innerHTML = iconClose()

const labelYes = document.querySelector('.appModalSteps__radio .iconYes')
labelYes.innerHTML = iconYes()

const labelNo = document.querySelector('.appModalSteps__radio .iconNo')
labelNo.innerHTML = iconNo()

const labelLock = document.querySelector('.appModalSteps__inform span')
labelLock.innerHTML = iconLock()

const iconMoneyboxBlock = document.querySelectorAll('.appFeatureGuards__moneybox')
for (let i = 0; i < iconMoneyboxBlock.length; ++i) {
  iconMoneyboxBlock[i].innerHTML = iconMoneybox();
}


// Modal actions
const appModal = document.querySelector("#appModal")
const openModal = document.querySelector("#openModal")
const closeModal = document.querySelector("#closeModal")
const progressBar = document.querySelector('#progressBar')
const nextButton = document.querySelector('#next')
const submitButton = document.querySelector('#submit')
const stepOneBlock = document.querySelector('.appModalSteps__step01')
const stepTwoBlock = document.querySelector('.appModalSteps__step02')
const selectedTextContainer = document.querySelector('.appModalSteps__step02 p strong')

openModal.addEventListener('click', () => {
  appModal.showModal();
  document.querySelector('body').classList.add('fix');
})
closeModal.addEventListener('click', () => {
  appModal.close();
  document.querySelector('body').classList.remove('fix');
})
nextButton.addEventListener('click', () => {
  const selectedText = document.querySelector('.appModalSteps__step01 input:checked').getAttribute('value');
  progressBar.setAttribute('value', '100');
  stepOneBlock.classList.add('appModalSteps--hide');
  stepTwoBlock.classList.remove('appModalSteps--hide');
  selectedTextContainer.textContent = selectedText;
})
submitButton.addEventListener('click', () => {
  progressBar.setAttribute('value', '50');
  stepOneBlock.classList.remove('appModalSteps--hide');
  stepTwoBlock.classList.add('appModalSteps--hide');
  const selectedRadioButton = document.querySelectorAll('.appModalSteps__step01 input')
  for (let i = 0; i < iconMoneyboxBlock.length; ++i) {
    selectedRadioButton[i].checked = false;
  }
  document.querySelector('body').classList.remove('fix');

})
