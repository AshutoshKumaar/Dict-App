const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`


const Sound = document.getElementById('sound')
const searchButton = document.getElementById('search-btn')
const wordContainer = document.getElementById('results')




searchButton.addEventListener("click", () => {
    let inputWord = document.getElementById('inp-word').value;
    fetch(`${url}${inputWord}`)
        .then((response) => {
            response.json()
                .then((data) => {
                    ShowWord(data, inputWord)
                })
                .catch(() => {
                    wordContainer.innerHTML = `<h3 class ='error_cls'>Couldn't find the word</h3>`
                })
        })

})




const ShowWord = (res, word) => {
    console.log(res)
    wordContainer.innerHTML = `<div class="word">
                                    <h3>${word}</h3>
                                    <button onclick = "playSound()">
                                        <i class="fa-solid fa-volume-high"></i>
                                    </button>
                                </div>
                                <div class="details">
                                    <p>${res[0].meanings[0].partOfSpeech}</p>
                                    <p>/${res[0].phonetic}/</p>
                                </div>
                                <p class="word-meaning">
                                      ${res[0].meanings[0].definitions[0].definition}
                                </p>
                                <p class="word-example">
                                    ${res[0].meanings[0].definitions[0].example || ""}
                                </p>
                                </div>`


    Sound.setAttribute("src", `${res[0].phonetics[0].audio}`)


    console.log(Sound)
}


const playSound = () => {
    Sound.play()
}


