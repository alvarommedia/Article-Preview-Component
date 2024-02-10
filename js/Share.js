const $articleCreator = document.getElementById('articleCreator')
const $articleShare = document.getElementById('articleShare')
const $shareButtonMobile = document.getElementById('shareButtonMobile')
const $shareButtonDesktop = document.getElementById('shareButtonDesktop')
const $shareButtonActive = document.getElementById('shareButtonActive')
const $imageShareButtonDesktop = document.getElementById('imageShareButtonDesktop')
let isShareVisible = false

$shareButtonMobile.addEventListener('click', () => {
  isShareVisible = true
  $articleCreator.style.transform = 'translateX(-100%)'
  $articleShare.style.transform = 'translateX(-100%)'
})
$shareButtonActive.addEventListener('click', () => {
  isShareVisible = false
  $articleCreator.style.transform = 'translateX(0%)'
  $articleShare.style.transform = 'translateX(0%)'
})
$shareButtonDesktop.addEventListener('click', () => {
  if (!isShareVisible) {
    isShareVisible = true
    $articleShare.style.scale = '1'
    $articleShare.style.top = '-90%'
    $shareButtonDesktop.classList.add('article__share-button--active')
    $imageShareButtonDesktop.classList.add('article__share-button-img--active')
  } else {
    isShareVisible = false
    $articleShare.style.scale = '0'
    $articleShare.style.top = '-20%'
    $shareButtonDesktop.classList.remove('article__share-button--active')
    $imageShareButtonDesktop.classList.remove('article__share-button-img--active')
  }
})
window.addEventListener('resize', () => {
  if (window.innerWidth > 1440 && isShareVisible) {
    $articleShare.style.scale = '1'
    $articleShare.style.top = '-90%'
    $articleCreator.style.transform = 'translateX(0%)'
    $articleShare.style.transform = 'translateX(0%)'
  }
  if (window.innerWidth > 1440 && !isShareVisible) {
    $articleShare.style.scale = '0'
    $articleShare.style.top = '-20%'
    $shareButtonDesktop.classList.remove('article__share-button--active')
    $imageShareButtonDesktop.classList.remove('article__share-button-img--active')
  }
  if (window.innerWidth <= 1440) {
    $articleShare.style.scale = '1'
  }
  if (window.innerWidth <= 1440 && isShareVisible) {
    $articleCreator.style.transform = 'translateX(-100%)'
    $articleShare.style.transform = 'translateX(-100%)'
  }
})
