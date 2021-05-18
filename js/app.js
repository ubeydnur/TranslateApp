//Prototype, Ajax, Callback
const translateFormDom = document.querySelector('#translate-form')
const selectDom = document.querySelector('#language-select')
const wordInputDom = document.querySelector('#word')

const translate = new Translate(wordInputDom.value,selectDom.value)
const ui = new UI()

eventListener()

function eventListener(){
    translateFormDom.addEventListener('submit',translateWord)

    //Change
    selectDom.onchange = function(){
        //Arayüz İşlemleri
        console.log('event')
        ui.changeUI()
    }
}

function translateWord(e){
    translate.changeParameters(wordInputDom.value,selectDom.value)

    translate.translateWord((err,response)=>{
        if(err){
            //Hata
            console.log(err)
        }
        else{
            ui.displayTranslate(response)
        }
    })

    e.preventDefault()
}