class Translate{
    constructor(word,language){
        this.apikey = //Yandex API key
        this.word = word
        this.language = language
        
        //XHR object
        this.xhr = new XMLHttpRequest()
    }

    translateWord(callback) {
        //Ajax işlemleri
        const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

        this.xhr.open('GET',endpoint)

        this.xhr.onload = () =>{
            if(this.xhr.status === 200){
                const json = JSON.parse(this.xhr.responseText)
                const text = json.text[0]

                callback(null,text)
            }else{
                callback('Bir hata olustu',null)
            }
        }
        this.xhr.send()
    }
    
    changeParameters(newWord,newLanguage){
        this.word = newWord
        this.language = newLanguage
    }
}