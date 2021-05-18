const outputImageDom = document.querySelector('#outputImage')
const outputLanguageDom = document.querySelector('#outputLanguage')
const outputWordDom = document.querySelector('#outputWord')

class UI {
    constructor() {
        this.outputImage = outputImageDom
        this.outputLanguage = outputLanguageDom
        this.outputWord = outputWordDom
        this.languageList = selectDom
    }
    changeUI() {
        //Arayüz Değiştir
        this.outputImage.src = `images/${this.languageList.value}.png`

        this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent
    }
    displayTranslate(word){
        this.outputWord.textContent= word
    }
}